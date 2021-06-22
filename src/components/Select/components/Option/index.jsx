import React from 'react';
import PropTypes from 'prop-types';

class Option extends React.Component {
  render() {
    const { value, text } = this.props;
    return (
      <option value={ value }>{text}</option>
    );
  }
}

Option.propTypes = {
  value: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Option;
