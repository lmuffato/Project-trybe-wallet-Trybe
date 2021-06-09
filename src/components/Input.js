import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { id, type } = this.props;
    return (
      <label htmlFor={ id }>
        {id}
        <input id={ id } type={ type } />
      </label>
    );
  }
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Input;
