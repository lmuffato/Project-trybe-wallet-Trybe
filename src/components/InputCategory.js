import React, { Component } from 'react';
import { categories } from '../services/data';

class InputCategory extends Component {
  render() {
    return (
      <label htmlFor="categoria">
        Tag
        <select name="categoria" id="categoria">
          {categories.map((category) => (
            <option key={ category } value={ category }>{ category }</option>
          ))}
        </select>
      </label>
    );
  }
}

export default InputCategory;
