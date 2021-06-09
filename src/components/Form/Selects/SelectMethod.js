import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SelectMethod extends Component {
  render() {
    const { name, value, handleChangeInput, optionsMethod } = this.props;
    return (
      <label htmlFor={ name }>
        Método de pagamento:
        <select
          name={ name }
          id={ name }
          value={ value }
          onChange={ handleChangeInput }
        >
          { optionsMethod.map((op, i) => <option key={ i }>{ op }</option>) }
        </select>
      </label>
    );
  }
}

SelectMethod.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChangeInput: PropTypes.func.isRequired,
  optionsMethod: PropTypes.oneOfType([PropTypes.array]).isRequired,
};
