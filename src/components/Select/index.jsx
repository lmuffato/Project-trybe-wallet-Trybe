import React from 'react';
import PropTypes from 'prop-types';

import Option from './components/Option';

import { SelectBox, SelectField } from './styles';

class Select extends React.Component {
  render() {
    const {
      select,
      name,
      labelName,
      options,
      value,
      onChange,
    } = this.props;

    return (
      <SelectBox>
        {labelName}
        <SelectField
          data-testid={ select }
          name={ name }
          value={ value }
          onChange={ onChange }
        >
          {options.map((option) => <Option key={ option.value } { ...option } />)}
        </SelectField>
      </SelectBox>
    );
  }
}

Select.propTypes = {
  select: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  labelName: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Select;
