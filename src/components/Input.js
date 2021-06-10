import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { id, name, onChange } = this.props;
    return (
      <label htmlFor={ name }>
        {id}
        <input onChange={ onChange } name={ name } type="text" />
      </label>
    );
  }
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
