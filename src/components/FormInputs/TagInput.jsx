import React from 'react';
import PropTypes from 'prop-types';

class TagInput extends React.Component {
  render() {
    const { localValue, onChange } = this.props;
    return (
      <label htmlFor="tag">
        tag
        <select
          id="tag"
          name="tag"
          value={ localValue }
          onChange={ onChange }
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="transporte">Transporte</option>
          <option value="Transporte">Saúde</option>
        </select>
      </label>
    );
  }
}

export default TagInput;

TagInput.propTypes = {
  onChange: PropTypes.func,
  localValue: PropTypes.string,
}.isRequired;
