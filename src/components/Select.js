import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { textLabel, name, options, onChange } = this.props;
    return (
      <label htmlFor={ name }>
        { `${textLabel}` }
        <select
          data-testid={ `${name}-input` }
          id={ name }
          name={ name }
          onChange={ onChange }
        >
          {options.map(((option) => (
            <option
              data-testid={ option }
              key={ option }
              value={ option }
            >
              { option }
            </option>
          )))}
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  textLabel: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Select;
