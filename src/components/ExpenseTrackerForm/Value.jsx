import React from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { addAmount } from '../actions';

function Value({ name, value, handleChange }) {
  // const [valor, setValor] = useState('');

  // const handleChange = (event) => {
  //   const { value } = event.target;
  //   // const { addValue } = props;
  //   setValor(value);
  //   // addValue(valor);
  //   // console.log(value);
  // };

  return (
    <label htmlFor="valor">
      Valor
      <input
        type="number"
        name={ name }
        id="valor"
        value={ value }
        onChange={ handleChange }
      />
    </label>
  );
}

Value.propTypes = {
  value: PropTypes.shape(PropTypes.number || PropTypes.string),
  name: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default Value;
