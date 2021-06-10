import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from './Header';
import { fetchApiThunk } from '../actions';

class Wallet extends React.Component {
  constructor() {
    super();

    this.fetchAPI = this.fetchAPI.bind(this);
  }

  componentDidMount() {
    const { getCurrencyFromAPI } = this.props;
    getCurrencyFromAPI();
  }

  render() {
    return (
      <>
        <Header />
        <form>
          <label htmlFor="input-value">
            Valor
            <input type="text" id="input-value" size="4" />
          </label>

          <label htmlFor="select-currency">
            Moeda
            <select id="select-currency">
              {/* <option>OPT</option> */}
            </select>

          </label>
          <label htmlFor="select-payMethod">
            Método de pagamento
            <select id="select-payMethod">
              <option value="dinheiro">Dinheiro</option>
              <option value="credito">Cartão de Crédito</option>
              <option value="debito">Cartão de Débito</option>
            </select>
          </label>

          <label htmlFor="tag">
            Tag
            <select id="tag">
              <option value="lazer">Lazer</option>
              <option value="trabalho">Trabalho</option>
              <option value="alimento">Alimentação</option>
              <option value="transporte">Transporte</option>
              <option value="saude">Saúde</option>
            </select>
          </label>

          <label htmlFor="input-desc">
            Descrição
            <input type="text" id="input-desc" />
          </label>

          <button type="submit">Adicionar Despesa</button>
        </form>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getCurrencyFromAPI: () => dispatch(fetchApiThunk()),
});

Wallet.propTypes = {
  getCurrencyFromAPI: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Wallet);
