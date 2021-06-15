import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrency } from '../actions';

// object.keys
class ExpenseForm extends React.Component {
  componentDidMount() {
    const { getCurrency } = this.props;
    getCurrency();
  }

  render() {
    const { currencies } = this.props;
    const xablaus = Object.keys(currencies).filter((currency) => currency !== 'USDT');

    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input id="valor" />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select id="moeda">
            {xablaus.map((xablau) => <option key={ xablau }>{ xablau }</option>)}
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento
          <select id="payment">
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão-crédito">Cartão de crédito</option>
            <option value="Cartão-débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="typeOfExpense">
          Tag
          <select id="typeOfExpense">
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <label htmlFor="descricao">
          Descrição
          <input id="descricao" />
        </label>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getCurrency: () => dispatch(fetchCurrency()),
});
const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

ExpenseForm.propTypes = {
  getCurrency: PropTypes.func.isRequired,
  currencies: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);
