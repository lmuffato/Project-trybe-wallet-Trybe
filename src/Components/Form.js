import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input type="text" name="Valor" />
        </label>
        <label htmlFor="Descrição">
          Descrição:
          <input type="text" name="Descrição" />
        </label>
        <label htmlFor="Moeda">
          Moeda:
          <select>
            <option value="laranja">Laranja</option>
            <option value="limao">Limão</option>
            <option selected value="coco">Coco</option>
            <option value="manga">Manga</option>
          </select>
        </label>
        <label htmlFor="Modo de pagamento">
          Método de pagamento:
          <select>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Crédito">Cartão de crédito</option>
            <option value="Debito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="Tag">
          Tag:
          <select>
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}
export default Form;
