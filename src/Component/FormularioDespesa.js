import React from 'react';

// Referência para a TAG select:
// https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/select

class FormularioDespesa extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="valor">
            Valor:
            <input type="text" id="valor" />
          </label>
          <label htmlFor="moeda">
            Moeda:
            <select id="moeda">a</select>
          </label>
          <label htmlFor="pagamento">
            Método de pagamento:
            <select id="pagamento">
              <option value="dinheiro" selected>Dinheiro</option>
              <option value="crédito">Cartão de crédito</option>
              <option value="débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="categoria">
            Tag:
            <select id="categoria">
              <option value="alimentação" selected>Alimentação</option>
              <option value="lazer">Lazer</option>
              <option value="trabalho">Trabalho</option>
              <option value="transporte">Transporte</option>
              <option value="saúde">Saúde</option>
            </select>
          </label>
          <label htmlFor="descrição">
            Descrição:
            <input type="text" id="descrição" />
          </label>
        </form>
      </div>
    );
  }
}

export default FormularioDespesa;
