import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { label, name, testeId, options, onChange, value } = this.props;
    return (
      <label htmlFor={ name }>
        { label}
        <select
          name={ name }
          data-testid={ testeId }
          id={ name }
          onChange={ onChange }
          value={ value }
        >
          {options.map((opition, index) => (
            <option key={ index }>{ opition }</option>
          ))}
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  testeId: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
}.isRequired;

export default Select;
