import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="id_valor">
          Valor
          <input
            type="number"
            name="name"
            id="id_valor"
          />
        </label>
        <label htmlFor="id_descricao">
          Descrição
          <input
            type="text"
            id="id_descricao"
          />
        </label>
        <label htmlFor="id_moeda">
          Moeda
          <select name="select" id="id_moeda">
            <option value="valor1">{}</option>
            <option value="valor2">{}</option>
            <option value="valor3">{}</option>
          </select>
        </label>
        <label htmlFor="id_metodo_pagamento">
          Método de pagamento
          <select name="select" id="id_metodo_pagamento">
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito" selected>Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="id_Tag">
          Tag
          <select name="select" id="id_Tag">
            <option value="valor1">Alimentação</option>
            <option value="valor2" selected>Lazer</option>
            <option value="valor3">Trabalho</option>
            <option value="valor3">Transporte</option>
            <option value="valor3">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

export default Form;
