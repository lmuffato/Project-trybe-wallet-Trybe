import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Tag extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="tag">
        Tag:
        <select id="tag" name="tag" value={ value } onChange={ handleChange }>
          <option>selecione</option>
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
      </label>
    );
  }
}

Tag.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;
