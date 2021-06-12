import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Inputs extends Component {
  render() {
    const { name, type = 'text', value, handleChangeInput, children } = this.props;
    return (
      <label htmlFor={ name }>
        {children}
        <input
          id={ name }
          type={ type }
          data-testid={ `${name}-input` }
          name={ name }
          value={ value }
          onChange={ handleChangeInput }
        />
      </label>
    );
  }
}

Inputs.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  handleChangeInput: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};

Inputs.defaultProps = {
  type: 'text',
};
