import React from 'react';
import { string, func, bool } from 'prop-types';

import styles from './styles.module.css';

class Input extends React.Component {
  render() {
    const {
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
      <label htmlFor={ name } className={ styles.inputBox }>
        {labelName}
        <input
          className={ styles.inputField }
          id={ name }
          value={ value }
          data-testid={ dataTestid }
          name={ name }
          onChange={ (event) => onChange(event) }
          type={ type }
          placeholder={ placeholder }
          checked={ checked }
        />
      </label>
    );
  }
}

Input.propTypes = {
  value: string.isRequired,
  onChange: func.isRequired,
  name: string.isRequired,
  dataTestid: string,
  placeholder: string,
  type: string,
  labelName: string,
  checked: bool,
};

Input.defaultProps = {
  dataTestid: '',
  placeholder: '',
  type: 'text',
  labelName: '',
  checked: false,
};

export default Input;
