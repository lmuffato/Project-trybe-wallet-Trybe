import React, { Component } from 'react';

class CoinForm extends Component {
  render() {
    return (
      <div>
        <label htmlFor="coin">
          Moeda:
          <select id="coin">
            <option>0</option>
          </select>
        </label>
      </div>
    );
  }
}

export default CoinForm;
