import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { description, name, onChange } = this.props;
    return (
      <>
        <label htmlFor={ name }>
          {' '}
          {description}
          {' '}
        </label>

        <input onChange={ onChange } id={ name } name={ name } type="text" />
      </>
    );
  }
}

Input.propTypes = {
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
