import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TagOptions extends Component {
  render() {
    const { handler } = this.props;
    return (
      <form>
        <label htmlFor="tag">
          Tag
          <select id="tag" name="tag" className="input is-success" onChange={ handler }>
            <option name="funOption"> Lazer </option>
            <option name="foodOption"> Alimentação </option>
            <option name="workOption"> Trabalho </option>
            <option name="transportOption"> Transporte </option>
            <option name="healthOption"> Saúde </option>
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
