import React, { Component } from 'react';

export default class Description extends Component {
  render() {
    return (
      <label htmlFor="description">
        Descrição
        <input type="text" id="description" />
      </label>
    );
  }
}
