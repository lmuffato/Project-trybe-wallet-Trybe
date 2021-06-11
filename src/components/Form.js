import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const { currencies } = this.props;
    const getCurrency = Object.keys({ ...currencies })
      .filter((key) => key !== 'USDT');
    return (
      <div>
        <form>
          <label htmlFor="expense">
            Valor
            <input type="number" id="expense" />
          </label>
          <label htmlFor="description">
            Descrição
            <input type="text" id="description" />
          </label>
          <label htmlFor="currency">
            Moeda
            <select name="currency" id="currency">
              {
                getCurrency
                  .map((currency) => <option key={ currency }>{currency}</option>)
              }
            </select>
          </label>
          <label htmlFor="payment-method">
            Método de pagamento
            <select name="payment-method" id="payment-method">
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select name="tag" id="tag">
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>

            </select>
          </label>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ wallet: { currencies } }) => ({ currencies });

// const mapDispatchToProps = (dispatch) => ({
//   getCurrencies: () => dispatch(fetchAPIThunk()),
// });

Form.propTypes = {
  currencies: PropTypes.array,
}.isRequired;

export default connect(mapStateToProps, null)(Form);
