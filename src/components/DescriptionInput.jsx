import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DescriptionInput extends Component {
  render() {
    const { handler } = this.props;
    return (
      <label htmlFor="desc">
        Descrição
        <input
          type="text"
          name="desc"
          id="desc"
          className="input is-success"
          onChange={ handler }
        />
      </label>
    );
  }
}

DescriptionInput.propTypes = {
  handler: PropTypes.func.isRequired,
};

export default DescriptionInput;
