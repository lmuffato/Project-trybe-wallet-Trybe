import React from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { addPaymentMethod } from '../actions';

function PaymentMethods({ value, handleChange, name }) {
  // const [paymentMethod, setPaymentMethod] = useState('');

  // const handleChange = (event) => {
  //   const { value } = event.target;
  //   const { addPayment } = props;
  //   setPaymentMethod(value);
  //   addPayment(paymentMethod);
  //   console.log(value);
  // };

  return (
    <label htmlFor="payment-method">
      Método de pagamento
      <select
        name={ name }
        id="payment-method"
        value={ value }
        onChange={ handleChange }
      >
        <option value=" ">Selecione</option>
        <option value="money">Dinheiro</option>
        <option value="credit">Cartão de crédito</option>
        <option value="debit">Cartão de débito</option>
      </select>
    </label>
  );
}

// const mapDispatchToProps = (dispatch) => ({
//   addPayment: (valor) => dispatch(addPaymentMethod(valor)),
// });

PaymentMethods.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

// export default connect(null, mapDispatchToProps)(PaymentMethods);
export default PaymentMethods;
