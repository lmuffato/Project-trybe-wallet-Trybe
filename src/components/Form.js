import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrenciesThunk } from '../actions/index';

class Form extends React.Component {
  componentDidMount() {
    const { getCurrenciesAPI } = this.props;
    getCurrenciesAPI();
  }

  render() {
    const { currencies } = this.props;

    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input type="text" name="valor" aria-label="valor" />
        </label>

        <label htmlFor="descricao">
          Descrição
          <input type="text" name="descricao" aria-label="descrição" />
        </label>

        <label htmlFor="moeda">
          Moeda
          <select name="moeda" aria-label="moeda">
            { currencies.map((currency) => (
              <option key={ currency }>{currency}</option>
            ))}
          </select>
        </label>

        <label htmlFor="metodoPagamento">
          Método de pagamento
          <select name="metodoPagamento" aria-label="método de pagamento">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="tag">
          Tag
          <select name="tag" aria-label="tag">
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

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrenciesAPI: () => dispatch(getCurrenciesThunk()),
});

Form.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string),
  getCurrenciesAPI: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Form);
