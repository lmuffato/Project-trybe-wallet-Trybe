import React from "react";

const Form = () => {
  return (
    <div>
      <form>
        <label htmlFor="name">
          Valor:
          <input type="number" name="valor" />
        </label>
        <label htmlFor="descricao">
          Descrição:
          <input type="text" name="descricao" />
        </label>
        <label htmlFor="moeda">
          Moeda:
          <select name="moeda">
            <option>Escolha uma moeda</option>
          </select>
        </label>
        <label htmlFor="pagamento">
          Método de pagamento:
          <select name="pagamento">
            <option value="dinheiro">Dinheiro</option>
            <option value="credito">Cartão de crédito</option>
            <option value="debito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select name="tag">
            <option value="alimentacao">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saude">Saúde</option>
          </select>
        </label>
      </form>
    </div>
  );
};

export default Form;
