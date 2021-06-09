import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CategorySelect extends Component {
  render() {
    const { change } = this.props;
    return (
      <label htmlFor="idCategory">
        Tag
        <select id="idCategory" name="tag" onChange={ change }>
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

CategorySelect.propTypes = {
  change: PropTypes.func.isRequired,
};
