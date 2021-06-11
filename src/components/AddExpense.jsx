import React, { useEffect, useState } from 'react';
import getCurrencies from '../service/Api';

const template = (currencies) => (
  <form className="container">
    <label className="form-label mb-3" htmlFor="valueExpense">
      Valor
      <input id="valueExpense" className="form-control" type="number" />
    </label>
    <label className="form-label mb-3" htmlFor="descriptionExpense">
      Descrição
      <input id="descriptionExpense" className="form-control" type="text" />
    </label>
    <label className="form-label mb-3" htmlFor="currency">
      Moeda
      <select id="currency" name="currency" className="form-select">
        {
          currencies.map((currency, index) => (
            <option key={ index }>
              {currency.code}
            </option>
          ))
        }
      </select>
    </label>
    <label className="form-label mb-3" htmlFor="paymentMethod">
      Método de pagamento
      <select id="paymentMethod" name="paymentMethod" className="form-select">
        <option>Dinheiro</option>
        <option>Cartão de crédito</option>
        <option>Cartão de débito</option>
      </select>
    </label>
    <label className="form-label mb-3" htmlFor="tag">
      Tag
      <select id="tag" name="tag" className="form-select">
        <option>Alimentação</option>
        <option>Lazer</option>
        <option>Trabalho</option>
        <option>Transporte</option>
        <option>Saúde</option>
      </select>
    </label>
  </form>
);

const AddExpense = () => {
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    const fetchCurrencies = async () => {
      const currenciesData = await getCurrencies();
      setCurrencies(currenciesData);
    };

    fetchCurrencies().then();
  }, []);

  return template(currencies);
};

export default AddExpense;
