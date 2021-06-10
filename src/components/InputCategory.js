import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { categories } from '../services/data';

class InputCategory extends Component {
  render() {
    const { propValue, onChange } = this.props;
    return (
      <label htmlFor="categoria">
        Tag
        <select
          id="categoria"
          name="tag"
          value={ propValue }
          onChange={ onChange }
        >
          <option value="">Selecione a categoria</option>
          {categories.map((category) => (
            <option key={ category } value={ category }>{ category }</option>
          ))}
        </select>
      </label>
    );
  }
}

InputCategory.propTypes = {
  propValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputCategory;
