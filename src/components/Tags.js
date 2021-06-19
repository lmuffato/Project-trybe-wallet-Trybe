import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Tags extends Component {
  render() {
    const { handleChange } = this.props;
    return (
      <label htmlFor="Tags">
        Tag
        <select
          id="Tags"
          name="tag"
          onChange={ handleChange }
        >
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

Tags.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
