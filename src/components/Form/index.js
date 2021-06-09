import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrenciesThunk } from '../../actions';

class Form extends Component {
  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  render() {
    const { currencies, isLoading } = this.props;
    if (isLoading) return 'Carregando...';
    return (
      <div>
        <form>
          <label htmlFor="value">
            Valor:
            <input id="value" type="number" name="value" />
          </label>
          <label htmlFor="description">
            Descrição:
            <input id="description" type="text" name="description" />
          </label>
          <label htmlFor="currency">
            Moeda:
            <select name="currency" id="currency" role="combobox">
              {
                currencies
                  .map((currency, id) => (
                    <option key={ id } value={ currency }>
                      { currency }
                    </option>))
              }
            </select>
          </label>
          <label htmlFor="paymentMethod">
            Método de pagamento:
            <select name="paymentMethod" id="paymentMethod">
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
              <option>Transporte</option>
              <option>Trabalho</option>
              <option>Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  isLoading: state.wallet.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(getCurrenciesThunk()),
});

Form.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  isLoading: PropTypes.bool.isRequired,
  getCurrencies: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
