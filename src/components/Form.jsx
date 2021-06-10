import React from 'react';

class Form extends React.Component {
  render() {
    const payments = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tag = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input type="number" id="valor" />
        </label>
        <label htmlFor="despesa">
          Descrição
          <input type="text" id="despesa" />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select id="moeda">
            <option>Moeda</option>
          </select>
        </label>
        <label htmlFor="pagamento">
          Método de pagamento
          <select id="pagamento">
            {payments.map((payment, index) => <option key={ index }>{payment}</option>)}
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag">
            {tag.map((expense, index) => <option key={ index }>{expense}</option>)}
          </select>

        </label>
      </form>
    );
  }
}

export default Form;
