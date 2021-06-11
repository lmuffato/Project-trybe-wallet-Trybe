import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

class ExpenseForm extends Component {
  render() {
    const { currencies } = this.props;
    const currencyName = Object.keys(currencies)
      .filter((currencie) => currencie !== 'USDT');
    return (
      <div>
        <form>
          <label htmlFor="Valor" name="Valor">
            Valor:
            <input type="text" id="Valor" />
          </label>
          <label htmlFor="Descrição">
            Descrição:
            <input type="text" id="Descrição" />
          </label>
          <label htmlFor="Moeda">
            Moeda
            <select id="Moeda">
              {currencyName.map((currency) => (
                <option key={ currency } value={ currency }>
                  { currency }
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="Método de pagamento">
            Método de pagamento
            <select id="Método de pagamento" name="Método de pagamento">
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="Tag">
            Tag
            <select id="Tag" name="Tag">
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

// const mapDispatchToProps = (dispatch) => ({
//   addCurrency: () => dispatch(apiFetchThunk()),
// });

const mapStateToProps = ({ wallet: { currencies } }) => ({
  currencies,
});

ExpenseForm.propTypes = {
  currencies: propTypes.array,
}.isRequired;

export default connect(mapStateToProps)(ExpenseForm);
