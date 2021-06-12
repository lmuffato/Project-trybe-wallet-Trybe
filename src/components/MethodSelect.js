import React from 'react';
import PropTypes from 'prop-types';

class MethodSelect extends React.Component {
  render() {
    const { onChange } = this.props;
    return (
      <label htmlFor="method">
        Método de pagamento
        <select onChange={ onChange } id="method" name="method">
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }
}

MethodSelect.propTypes = {
  onChange: PropTypes.func.isRequired,
};
export default MethodSelect;
