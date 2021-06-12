import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Selects extends Component {
  render() {
    const {
      name, role = '', value, handleChangeInput, currencies, children,
    } = this.props;
    return (
      <label htmlFor="currency">
        {children}
        <select
          name={ name }
          data-testid={ `${name}-input` }
          id={ name }
          role={ role }
          value={ value }
          onChange={ handleChangeInput }
        >
          {
            currencies.map((cur, id) => (
              <option key={ id } value={ cur }>
                { cur }
              </option>))
          }
        </select>
      </label>
    );
  }
}

Selects.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  handleChangeInput: PropTypes.func.isRequired,
  currencies: PropTypes.oneOfType([PropTypes.array]).isRequired,
  children: PropTypes.string.isRequired,
};
