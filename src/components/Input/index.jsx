import React from 'react';
import { string } from 'prop-types';
import { Label } from './styles';

class Input extends React.Component {
  render() {
    const { labelName, placeholder, className } = this.props;

    return (
      <label htmlFor="" className={ className }>
        {labelName}
        <input placeholder={ placeholder } />
      </label>
    );
  }
}

Input.propTypes = {
  labelName: string.isRequired,
  placeholder: string.isRequired,
  className: string.isRequired,
};

export default Input;
