import React, { Component } from 'react';

export default class Currency extends Component {
  render() {
    return (
      <label htmlFor="currency">
        Moeda
        <select id="currency">
          <option>Vazio</option>
        </select>
      </label>
    );
  }
}
