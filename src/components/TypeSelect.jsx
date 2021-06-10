import React from 'react';
import PropTypes from 'prop-types';

class TypeSelect extends React.Component {
  render() {
    const { type, handleType } = this.props;
    return (
      <label htmlFor="type">
        Tag
        <select
          id="type"
          value={ type }
          onChange={ handleType }
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }
}

TypeSelect.propTypes = {
  type: PropTypes.string,
}.isRequired;

export default TypeSelect;
