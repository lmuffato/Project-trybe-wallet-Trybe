import React from 'react';
import PropTypes, { string, func, arrayOf } from 'prop-types';

import Option from './components/Option';

import styles from './styles.module.css';

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
      <label htmlFor={ name } className={ styles.selectBox }>
        {labelName}
        <select
          className={ styles.selectField }
          data-testid={ select }
          id={ name }
          name={ name }
          value={ value }
          onChange={ onChange }
        >
          {options.map((option) => <Option key={ option.value } { ...option } />)}
        </select>
      </label>
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
