import React from 'react';

class InputCurrency extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="moedas">
          Moeda
          <select
            name="moedas"
            id="moedas"
          >
            Moeda
          </select>
        </label>
      </form>
    );
  }
}

export default InputCurrency;
