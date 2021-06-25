import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormSelects extends Component {
  render() {
    const { method, tag, onChange } = this.props;
    return (
      <>
        <label htmlFor="method">
          Método de pagamento
          <select
            id="method"
            name="method"
            value={ method }
            onChange={ onChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select
            id="tag"
            name="tag"
            value={ tag }
            onChange={ onChange }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </>
    );
  }
}

FormSelects.propTypes = {
  method: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormSelects;
