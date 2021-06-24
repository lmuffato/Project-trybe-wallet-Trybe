import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="valor">
            Valor
            <input type="number" name="valor" />
          </label>
          <label htmlFor="describle">
            Descrição
            <input type="text" name="describle" />
          </label>
          <label htmlFor="moeda">
            Moeda
            <select id="moeda" name="moeda">
              <option>teste</option>
            </select>
          </label>
          <label htmlFor="metodo">
            Método de pagamento
            <select id="" name="metodo">
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="metodo">
            Tag
            <select id="" name="metodo">
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default Form;
