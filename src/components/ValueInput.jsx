import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class ValueInput extends Component {
  render() {
    const { handleChange, value } = this.props;
    return (
      <label htmlFor="valor">
        valor
        <input
          aria-label="valor"
          type="text"
          name="value"
          onChange={ handleChange }
          value={ value }
        />
      </label>
    );
  }
}
ValueInput.propTypes = {
  handleChange: PropTypes.func,
  value: PropTypes.string,

}.isRequired;

export default connect()(ValueInput);
