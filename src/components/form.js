import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrencyExchange } from '../actions';

class Form extends React.Component {
  componentDidMount() {
    const { getValue } = this.props;
    getValue();
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
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getValue: () => dispatch(fetchCurrencyExchange()),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

Form.propTypes = {
  getValue: PropTypes.func.isRequired,
  currencies: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
