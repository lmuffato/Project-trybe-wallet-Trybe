import React from 'react';
import { string, func, bool } from 'prop-types';

import { InputBox, InputField } from './styles';

class Input extends React.Component {
  render() {
    const {
      customTag,
      labelName,
      placeholder,
      dataTestid,
      name,
      onChange,
      type,
      value,
      checked,
    } = this.props;

    return (
      <InputBox>
        {labelName}
        <InputField
          as={ customTag }
          value={ value }
          data-testid={ dataTestid }
          name={ name }
          onChange={ (event) => onChange(event) }
          type={ type }
          placeholder={ placeholder }
          checked={ checked }
        />
      </InputBox>
    );
  }
}

Input.propTypes = {
  value: string.isRequired,
  onChange: func.isRequired,
  name: string.isRequired,
  dataTestid: string,
  placeholder: string,
  customTag: string,
  type: string,
  labelName: string,
  checked: bool,
};

Input.defaultProps = {
  dataTestid: '',
  customTag: 'input',
  placeholder: '',
  type: 'text',
  labelName: '',
  checked: false,
};

export default Input;
