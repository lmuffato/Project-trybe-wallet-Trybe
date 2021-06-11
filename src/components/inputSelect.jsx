import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputSelect extends Component {
  options() {
    const { arrayOption } = this.props;
    return arrayOption.map((index) => (
      <option key={ index }>{ index }</option>
    ));
  }

  render() {
    const array = this.options();
    const { htmlFor, textLabel, name } = this.props;
    return (
      <label htmlFor={ htmlFor }>
        { textLabel }
        <select name={ name }>
          { array || <option>select</option>}
        </select>
      </label>
    );
  }
}

InputSelect.propTypes = {
  textLabel: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  arrayOption: PropTypes.arrayOf(PropTypes.string).isRequired,
};
