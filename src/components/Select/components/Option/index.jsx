import React from 'react';
import { string } from 'prop-types';

class Option extends React.Component {
  render() {
    const { value, text, name } = this.props;
    return (
      <option name={ name } value={ value }>{text}</option>
    );
  }
}

Option.propTypes = {
  name: string.isRequired,
  value: string.isRequired,
  text: string.isRequired,
};

export default Option;
