import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrenciesThunk } from '../actions';

class Forms extends Component {
  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  render() {
    const payments = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tag = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const { currencies } = this.props;
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input id="valor" type="number" name="name" />
        </label>
        <label htmlFor="descrição">
          Descrição
          <input id="descrição" type="text" name="name" />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select id="moeda">
            {currencies.map((curr, index) => <option key={ index }>{curr}</option>)}
          </select>
        </label>
        <label htmlFor="método">
          Método de pagamento
          <select id="método">
            {payments.map((payment, index) => <option key={ index }>{payment}</option>)}
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag">
            {tag.map((payment, index) => <option key={ index }>{payment}</option>)}
          </select>
        </label>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(getCurrenciesThunk()),
});

Forms.propTypes = {
  getCurrencies: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Forms);
