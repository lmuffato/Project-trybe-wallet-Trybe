import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { sendLogin } from '../actions/index';
import './forms.css';

class Forms extends React.Component {
  constructor() {
    super();

    this.valorInput = this.valorInput.bind(this);
    this.descricaoInput = this.descricaoInput.bind(this);
    this.moedasInput = this.moedasInput.bind(this);
    this.pagamentoInput = this.pagamentoInput.bind(this);
    this.tagsInput = this.tagsInput.bind(this);
  }

  valorInput() {
    return (
      <label htmlFor="Valor" className="label-valor">
        Valor:
        <input
          className="input-valor"
          id="Valor"
          type="text"
          name="valor"
        />
      </label>
    );
  }

  descricaoInput() {
    return (
      <label htmlFor="Descrição" className="label-descricao">
        Descrição:
        <input
          className="input-descricao"
          id="Descrição"
          type="text"
          name="descricao"
        />
      </label>
    );
  }

  moedasInput() {
    return (
      <label htmlFor="moedas" className="label-moeda">
        Moeda:
        <select
          className="input-moeda"
          id="moedas"
        >
          <option value="nulo">Vazio</option>
        </select>
      </label>
    );
  }

  pagamentoInput() {
    return (
      <label htmlFor="Pagamento" className="label-pagamento">
        Método de pagamento:
        <select
          className="input-pagamento"
          id="Pagamento"
        >
          <option value="money">Dinheiro</option>
          <option value="credit-cart">Cartão de crédito</option>
          <option value="debit-cart">Cartão de Débito</option>
        </select>
      </label>
    );
  }

  tagsInput() {
    return (
      <label htmlFor="Tags" className="label-tags">
        Tag:
        <select
          className="input-tags"
          id="Tags"
        >
          <option value="Alimentacao">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saude">Saúde</option>
        </select>
      </label>
    );
  }

  render() {
    const { valorInput, moedasInput, pagamentoInput, tagsInput, descricaoInput } = this;
    return (
      <main>
        <form>
          {valorInput()}
          {moedasInput()}
          {pagamentoInput()}
          {tagsInput()}
          {descricaoInput()}
        </form>
      </main>
    );
  }
}

export default Forms;
