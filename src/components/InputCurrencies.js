import React, { Component } from 'react';

class InputCurrencies extends Component {
  render() {
    return (
      <label htmlFor="moedas">
        Moeda
        <select name="moedas" id="moedas">
          {/* <option value="">Teste</option> */}
        </select>
      </label>
    );
  }
}

export default InputCurrencies;
