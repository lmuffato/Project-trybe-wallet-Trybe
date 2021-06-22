import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addOutlay, fetchCurrencyExchange } from '../actions';

let giveValue;

class Form extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: {},
      count: 0,
    }
    this.getData = this.getData.bind(this);
  }
  componentDidMount() {
    const { getValue } = this.props;
    getValue();
  }

  async getData() {
    const { count } = this.state;
    const dataCurrency = await (await fetch('https://economia.awesomeapi.com.br/json/all')).json();
    delete dataCurrency.USDT;
    const value = document.querySelector('#valor').value;
    const description = document.querySelector('#descricao').value;
    const money = document.querySelector('#moeda').value;
    const method = document.querySelector('#metodo').value;
    const tag = document.querySelector('#tag').value;
    console.log(value);
    console.log(description);
    console.log(money);
    console.log(method);
    console.log(tag);
    this.setState({
      data: {id: count, value, description, currency: money, method, tag, dataCurrency},
    });
    this.setState({
      count: count + 1,
    });
    const { data } = this.state;
    giveValue = data;
    const { getWallet } = this.props;
    getWallet(giveValue);
  }

  render() {
    const { currencies } = this.props;
    const paperMoney = Object.keys(currencies).filter((currency) => currency !== 'USDT');
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input type="text" name="valor" id="valor" />
        </label>
        <label htmlFor="descricao">
          Descrição:
          <input type="text" name="descricao" id="descricao" />
        </label>
        <label htmlFor="moeda">
          Moeda:
          <select name="moeda" id="moeda">
            {paperMoney.map((money) => <option key={ money }>{ money }</option>)}
          </select>
        </label>
        <label htmlFor="metodo">
          Método de pagamento:
          <select name="metodo" id="metodo">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select name="tag" id="tag">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <button type="button" onClick={ this.getData } >Adicionar despesa</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getValue: () => dispatch(fetchCurrencyExchange()),
  getWallet: (giveValue) => dispatch(addOutlay(giveValue)),
});

const mapStateToProps = (state) => ({
  currencies: state.getWallet.currencies,
});

Form.propTypes = {
  getValue: PropTypes.func.isRequired,
  currencies: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
