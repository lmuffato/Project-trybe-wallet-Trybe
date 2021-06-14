import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TagInput extends Component {
  render() {
    const { handleChange, tag } = this.props;

    return (
      <label htmlFor="tag">
        Tag
        <select
          value={ tag }
          name="tag"
          onChange={ handleChange }
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

TagInput.propTypes = {
  handleChange: PropTypes.func,
  tag: PropTypes.string,
}.isRequired;

export default TagInput;
