import React from 'react';

class Forms extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="valor">
            Valor
            <input id="valor" type="text" />
          </label>
          <label htmlFor="descriçao">
            Descrição
            <input id="descriçao" type="text" />
          </label>
          <label htmlFor="moeda">
            Moeda
            <select id="moeda">{}</select>
          </label>
          <label htmlFor="mtdPagamento">
            Método de pagamento
            <select id="mtdPagamento" name="method">
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select id="tag" name="tag">
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default Forms;
