import React from 'react';
import PropTypes from 'prop-types';

class InputPayment extends React.Component {
  render() {
    const { inputValue, onChange } = this.props;
    return (
      <form>
        <label htmlFor="method">
          Método de pagamento
          <select
            value={ inputValue }
            onChange={ onChange }
            className="input"
            name="method"
            id="method"
          >
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
      </form>
    );
  }
}

InputPayment.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default InputPayment;
