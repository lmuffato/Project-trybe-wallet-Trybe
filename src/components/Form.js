import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../styles/components/form.css';

class Form extends Component {
  constructor(props) {
    super(props);

    this.handleInput = this.handleInput.bind(this);

    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      id: 0,
    };
  }

  handleInput(event) {
    const { value, name } = event.target;

    if (name === 'valor') {
      this.setState({ value });
    }

    if (name === 'descricao') {
      this.setState({ description: value });
    }

    if (name === 'metodo') {
      this.setState({ method: value });
    }

    if (name === 'tag') {
      this.setState({ tag: value });
    }

    if (name === 'moeda') {
      this.setState({ currency: value });
    }
  }

  handleButton(addExpences, expence) {
    addExpences(expence);
    const { id } = this.state;

    this.setState({ id: id + 1 });
  }

  renderValueInput(valor) {
    return (
      <label htmlFor="valor">
        Valor
        <input
          type="text"
          name="valor"
          id="valor"
          value={ valor }
          onChange={ this.handleInput }
        />
      </label>
    );
  }

  renderDescriptionInput(description) {
    return (
      <label htmlFor="descricao">
        Descrição
        <input
          type="text"
          name="descricao"
          id="descricao"
          placeholder="..."
          onChange={ this.handleInput }
          value={ description }
        />
      </label>
    );
  }

  renderCurrencySelect(currencies, currency) {
    return (
      <label htmlFor="moeda">
        Moeda
        <select name="moeda" id="moeda" value={ currency } onChange={ this.handleInput }>
          { currencies.map((item) => (
            <option value={ item } key={ item }>{item}</option>
          ))}
        </select>
      </label>
    );
  }

  renderMethodSelect(method) {
    return (
      <label htmlFor="metodo">
        Método de pagamento
        <select name="metodo" id="metodo" onChange={ this.handleInput } value={ method }>
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de débito">Cartão de débito</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
        </select>
      </label>
    );
  }

  renderTagSelect(tag) {
    return (
      <label htmlFor="tag">
        Tag
        <select name="tag" id="tag" onChange={ this.handleInput } value={ tag }>
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }

  render() {
    const { id, value, description, currency, method, tag } = this.state;
    const { currencies, addExpences } = this.props;

    return (
      <form>
        {this.renderValueInput(value)}

        {this.renderDescriptionInput(description)}

        {this.renderCurrencySelect(currencies, currency)}

        {this.renderMethodSelect(method)}

        {this.renderTagSelect(tag)}

        <button
          type="button"
          onClick={
            () => this.handleButton(addExpences,
              { id, value, description, currency, method, tag })
          }
        >
          Adicionar despesa

        </button>
      </form>
    );
  }
}

Form.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  addExpences: PropTypes.func.isRequired,
};

export default Form;
