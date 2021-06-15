import React, { Component } from 'react';
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

export default connect()(ValueInput);
