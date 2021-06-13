import React, { Component } from 'react';

class CurrencyInput extends Component {
  render() {
    return (
      <label htmlFor="moedas">
        Moeda
        <select name="moedas" id="moedas">
          <option value="">VAZIO</option>
        </select>
      </label>
    );
  }
}

export default CurrencyInput;
