import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchThunk } from '../actions';
import '../Wallet.css';

class Wallet extends Component {
  componentDidMount() {
    const { requestFetch } = this.props;
    return requestFetch();
  }

  render() {
    const { props: { emailDaPessoa, currencies } } = this;
    return (
      <>
        <div className="flex-container">
          <header data-testid="email-field">
            {emailDaPessoa}
          </header>
          <span data-testid="header-currency-field">BRL</span>
          <span data-testid="total-field">{0}</span>
        </div>
        <form className="fieldset">
          <label htmlFor="valor">
            Valor:
            <input id="valor" type="text" name="Valor" />
          </label>
          <label htmlFor="descrição">
            Descrição:
            <input id="descrição" type="text" name="Descrição" />
          </label>
          <label htmlFor="moeda">
            Moeda:
            <select id="moeda" name="Moeda">
              {currencies.map((curr) => <option key={ curr }>{curr}</option>)}
            </select>
          </label>
          <label htmlFor="tag">
            Tag:
            <select id="tag" name="Tag">
              <option value="alimentação" selected>Alimentação</option>
              <option value="lazer">Lazer</option>
              <option value="trabalho">Trabalho</option>
              <option value="transporte">Transporte</option>
              <option value="saúde">Saúde</option>
            </select>
          </label>
          <label htmlFor="metodoDePagamento">
            Método de pagamento:
            <select id="metodoDePagamento" name="Método de pagamento">
              <option value="dinheiro" selected>Dinheiro</option>
              <option value="cartão-de-crédito">Cartão de crédito</option>
              <option value="Cartão-de-débito">Cartão de débito</option>
            </select>
          </label>
        </form>
      </>
    );
  }
}

Wallet.propTypes = {
  emailDaPessoa: PropTypes.string.isRequired,
  requestFetch: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  emailDaPessoa: state.user.email,
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  requestFetch: () => dispatch(fetchThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
