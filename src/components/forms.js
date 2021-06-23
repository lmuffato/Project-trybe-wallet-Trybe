import React from 'react';
import PropTypes from 'prop-types';
import Payment from './payment';
import Tag from './tag';

class Form extends React.Component {
  render() {
    const { currencies } = this.props;
    const keysCurrencies = currencies ? Object.keys(currencies)
      .filter((currencie) => currencie !== 'USDT') : [];

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
            {keysCurrencies.length && keysCurrencies.map((curr, index) => (
              <option key={ index }>{curr}</option>
            ))}
          </select>
        </label>
        <Payment />
        <Tag />
      </form>
    );
  }
}

Form.propTypes = {
  currencies: PropTypes.string,
}.isRequired;

export default Form;
