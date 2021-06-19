import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Expenses extends Component {
  render() {
    const { handleChange } = this.props;
    return (
      <label htmlFor="expense">
        Valor
        <input
          onChange={ handleChange }
          type="number"
          id="expense"
          name="value"
        />
      </label>
    );
  }
}

Expenses.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
