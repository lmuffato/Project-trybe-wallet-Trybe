import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ValueInput extends Component {
  render() {
    const { handler } = this.props;
    return (
      <label htmlFor="valor">
        Valor
        <input
          type="number"
          name="valor"
          id="valor"
          className="input is-success"
          onChange={ handler }
        />
      </label>
    );
  }
}

ValueInput.propTypes = {
  handler: PropTypes.func.isRequired,
};

export default ValueInput;
