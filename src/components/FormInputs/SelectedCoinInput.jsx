import React from 'react';

class SelectedCoinInput extends React.Component {
  render() {
    return (
      <label htmlFor="moedaSelected">
        Moeda:
        <select id="moedaSelected">
          {/*   {coins.map(coin) => ({
            <option value={coin.code}>{coin.code}</option>
          })}; */}
          <option value="BRL">BRL</option>
        </select>
      </label>
    );
  }
}

export default SelectedCoinInput;
