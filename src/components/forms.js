import React from 'react';
import Payment from './payment';
import Tag from './tag';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input
            type="number"
            value=""
            name="value"
            id="value"
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            name="description"
            type="text"
            value=""
            id="description"
          />
        </label>
        <label htmlFor="moeda">
          moeda
          <select value="" name="moeda" id="moeda">
            <option>BRL</option>
          </select>
        </label>
        <Payment />
        <Tag />
      </form>
    );
  }
}

export default Form;
