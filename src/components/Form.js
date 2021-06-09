import React from 'react';

const tempOptions = ['1', '2', '3'];

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input name="value" type="number" aria-label="valor" />
        </label>
        <label htmlFor="description">
          Descrição:
          <input name="description" type="text" aria-label="descrição" />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select
            name="currency"
            aria-label="moeda"
            options={ tempOptions }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="method">
          Método de pagamento:
          <select
            name="method"
            aria-label="método de pagamento"
            onChange={ this.handleChange }
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select
            name="tag"
            aria-label="tag"
            onChange={ this.handleChange }
          >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

export default Form;
