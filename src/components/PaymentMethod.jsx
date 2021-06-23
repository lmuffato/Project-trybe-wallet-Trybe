import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { paymentMethod } from '../actions/index';

class PaymentMethod extends Component {
  render() {
    const { inputPaymentMethod } = this.props;
    return (
      <div>
        <label htmlFor="method">
          Método de pagamento
          <select
            id="method"
            name="method"
            onChange={ (event) => {
              inputPaymentMethod(event.target.value);
            } }
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expensesMethod: state.wallet2.method,
});

const mapDispatchToProps = (dispatch) => ({
  inputPaymentMethod: (method) => dispatch(paymentMethod(method)),
});

PaymentMethod.propTypes = {
  inputPaymentMethod: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PaymentMethod);
