import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../styles/components/form.css';

class Form extends Component {
  constructor(props) {
    super(props);

    this.handleInput = this.handleInput.bind(this);

    this.state = {
      valor: '0',
      description: '',
      currency: 'BRL',
      method: 'dinheiro',
      tag: 'alimentacao',
    };
  }

  handleInput(event) {
    const { value, name } = event.target;

    if (name === 'valor') {
      this.setState({ valor: value });
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
          <option value="dinheiro">Dinheiro</option>
          <option value="credito">Cartão de crédito</option>
          <option value="debito">Cartão de débito</option>
        </select>
      </label>
    );
  }

  renderTagSelect(tag) {
    return (
      <label htmlFor="tag">
        Tag
        <select name="tag" id="tag" onChange={ this.handleInput } value={ tag }>
          <option value="alimentacao">Alimentação</option>
          <option value="lazer">Lazer</option>
          <option value="trabalho">Trabalho</option>
          <option value="transporte">Transporte</option>
          <option value="saude">Saúde</option>
        </select>
      </label>
    );
  }

  render() {
    const { valor, description, currency, method, tag } = this.state;
    const { currencies } = this.props;

    return (
      <form>
        {this.renderValueInput(valor)}

        {this.renderDescriptionInput(description)}

        {this.renderCurrencySelect(currencies, currency)}

        {this.renderMethodSelect(method)}

        {this.renderTagSelect(tag)}

        <button type="button">Adicionar despesa</button>
      </form>
    );
  }
}

Form.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  // addExpences: PropTypes.func.isRequired,
};

export default Form;
