import React from 'react';
import PropTypes, { string, func, arrayOf } from 'prop-types';

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
  select: string.isRequired,
  name: string.isRequired,
  labelName: string.isRequired,
  options: arrayOf(PropTypes.object).isRequired,
  value: string.isRequired,
  onChange: func.isRequired,
};

export default Select;
