import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrencyThunk } from '../actions';
import Input from './Input';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      value: '',
      description: '',
      method: '',
      tag: '',
      exchangeRates: [],
    };
    this.handleData = this.handleData.bind(this);
  }

  componentDidMount() {
    const { getApiThunk } = this.props;
    getApiThunk();
  }

  handleData({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => console.log(this.state));
  }

  render() {
    const { currencies } = this.props;
    const filteredCurrencies = currencies.filter((currency) => (
      currency.codein !== 'BRLT'));
    return (
      <form>
        <Input onChange={ this.handleData } description="Valor" name="value" />
        <label htmlFor="currency">
          Moeda
          <select onChange={ this.handleData } id="currency" name="currency">
            {filteredCurrencies.map((currency) => (
              <option
                key={ currency.code }
                value={ currency.code }
              >
                {currency.code}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento
          <select onChange={ this.handleData } id="method" name="method">
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select onChange={ this.handleData } id="tag" name="tag">
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <Input onChange={ this.handleData } description="Descrição" name="description" />
        <button type="button">Adicionar despesa</button>
      </form>
    );
  }
}

const mapStateToProps = ({ wallet }) => ({
  currencies: wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getApiThunk: () => dispatch(getCurrencyThunk()),
});

Form.propTypes = {
  getApiThunk: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.string,
  })).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
