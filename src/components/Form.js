import React, { Component } from 'react';

import '../styles/components/form.css';

class Form extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     valor: 0,
  //     descricao: '',
  //     moeda: '',
  //     metodo: '',
  //     tag: '',
  //   };
  // }

  render() {
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input type="text" name="valor" id="valor" />
        </label>

        <label htmlFor="descricao">
          Descrição
          <input type="text" name="descricao" id="descricao" />
        </label>

        <label htmlFor="moeda">
          Moeda
          <select name="moeda" id="moeda">
            <option value="no">no</option>
          </select>
        </label>

        <label htmlFor="metodo">
          Método de pagamento
          <select name="metodo" id="metodo">
            <option value="dinheiro">Dinheiro</option>
            <option value="credito">Cartão de crédito</option>
            <option value="debito">Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="tag">
          Tag
          <select name="tag" id="tag">
            <option value="alimentacao">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saude">Saúde</option>
          </select>
        </label>

        <button type="button">Adicionar despesa</button>
      </form>
    );
  }
}

export default Form;
