import React from 'react';
import { bool, func, arrayOf, oneOfType, string, object } from 'prop-types';

import styles from './styles.module.css';

function Button(props) {
  const {
    children,
    disabled,
    onClick,
  } = props;

  return (
    <button
      className={ styles.button }
      type="submit"
      disabled={ disabled }
      onClick={ (event) => onClick(event) }
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: arrayOf(oneOfType([object, string])).isRequired,
  disabled: bool.isRequired,
  onClick: func.isRequired,
};

export default Button;
