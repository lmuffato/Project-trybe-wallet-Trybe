import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCoinsThunk } from '../actions';

class ExpensesForm extends React.Component {
  componentDidMount() {
    const { getCoins } = this.props;
    getCoins();
  }

  render() {
    const { currencies } = this.props;
    return (
      <form>
        <label htmlFor="valor" id="valor">
          Valor
          <input type="text" name="valor" aria-labelledby="valor" />
        </label>
        <label htmlFor="descrição" id="descrição">
          Descrição
          <textarea type="text" name="descrição" aria-labelledby="descrição" />
        </label>
        <label htmlFor="moeda" id="moeda">
          Moeda
          <select name="moeda" aria-labelledby="moeda">
            {!currencies
              ? <option value="BRL">BRL</option>
              : currencies.map((currency) => (
                <option key={ currency } value={ currency }>{ currency }</option>
              ))}
          </select>
        </label>
        <label htmlFor="paymentType" id="paymentType">
          Método de pagamento
          <select
            name="paymentType"
            aria-labelledby="paymentType"
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag" id="tag">
          Tag
          <select
            name="tag"
            aria-labelledby="tag"
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getCoins: () => dispatch(getCoinsThunk()),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

ExpensesForm.propTypes = {
  getCoins: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesForm);

// aria-labelledby="valor"; lendo o erro do npm test, foi feita a sugestão do aria-labelledby
