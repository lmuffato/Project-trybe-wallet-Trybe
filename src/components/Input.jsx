import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {
  render() {
    const { type, htmlFor, name, textLabel } = this.props;
    return (
      <label htmlFor={ htmlFor }>
        { textLabel }
        <input
          type={ type }
          name={ name }
          // onChange={ (event) => onchange('expenseAmount', event.target.value) }
        />
      </label>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  textLabel: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
