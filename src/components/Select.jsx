import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { options, infos: { name, id, label }, onChange, value } = this.props;
    return (
      <label htmlFor={ name }>
        {label}
        <select
          name={ name }
          id={ id }
          onChange={ onChange }
          value={ value }
        >
          {options.map((option) => <option key={ option }>{option}</option>)}
        </select>
      </label>
    );
  }
}

export default Select;

Select.propTypes = {
  options: PropTypes.array,
  infos: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string,
    label: PropTypes.string,
  }),
  onChange: PropTypes.func,
  value: PropTypes.string,
}.isRequired;
