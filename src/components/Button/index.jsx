import React from 'react';
import { number, bool, func, string, node } from 'prop-types';

import styles from './styles.module.css';

function Button(props) {
  const {
    children,
    disabled,
    onClick,
    dataTestId,
    id,
  } = props;

  return (
    <button
      data-testid={ dataTestId }
      className={ styles.button }
      type="submit"
      disabled={ disabled }
      onClick={ (event) => (id >= 0 ? onClick(id) : onClick(event)) }
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: node.isRequired,
  // children: arrayOf(oneOfType([string, object])).isRequired,
  onClick: func.isRequired,
  disabled: bool,
  dataTestId: string,
  id: number,
};

Button.defaultProps = {
  dataTestId: '',
  disabled: false,
  id: undefined,
};

export default Button;
