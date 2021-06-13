import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputSelect extends Component {
  constructor(props) {
    super(props);
    // const { name, arrayOption } = this.props;
    this.state = {
      // [name]: arrayOption[0],
    };
  }

  options() {
    const { arrayOption } = this.props;
    if (arrayOption) {
      return arrayOption.map((index) => (
        <option key={ index }>{ index }</option>
      ));
    }
  }

  handleChange(field, value) {
    this.setState({ [field]: value });
  }

  render() {
    // const {  } = this.state;
    const array = this.options();
    const { htmlFor, textLabel, name } = this.props;
    console.log(this.state);
    return (
      <label htmlFor={ htmlFor }>
        { textLabel }
        <select
          name={ name }
          onChange={ (event) => this.handleChange(name, event.target.value) }
        >
          { array || ''}
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
