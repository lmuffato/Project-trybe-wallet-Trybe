import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TagOptions extends Component {
  render() {
    const { handler } = this.props;
    return (
      <form>
        <label htmlFor="tag">
          Tipo
          <select name="tag" className="input is-success" onChange={ handler }>
            <option name="tag"> Lazer </option>
            <option name="tag"> Alimentação </option>
          </select>
        </label>
      </form>
    );
  }
}

TagOptions.propTypes = {
  handler: PropTypes.func.isRequired,
};

export default TagOptions;
