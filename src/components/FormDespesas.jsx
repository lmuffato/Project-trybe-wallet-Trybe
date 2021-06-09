import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func, arrayOf, shape } from 'prop-types';

import { addDespesaThunk } from '../actions';

class FormDespesas extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
    };
    this.renderOptions = this.renderOptions.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  handleChange({ target: { name, value } }) {
    const { expenses } = this.props;
    this.setState({
      id: expenses.length ? expenses.length : 0,
      [name]: value,
    });
  }

  resetState() {
    this.setState({
      id: 0,
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
    });
  }

  renderOptions() {
    const { currencies } = this.props;
    return (
      <label htmlFor="currency">
        Moeda:
        <select onChange={ this.handleChange } name="currency" id="currency">
          { currencies.map((moeda) => (
            <option key={ moeda }>{moeda}</option>
          )) }
        </select>
      </label>
    );
  }

  render() {
    const { addDespesa } = this.props;
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input onChange={ this.handleChange } type="number" name="value" id="value" />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            onChange={ this.handleChange }
            type="text"
            name="description"
            id="description"
          />
        </label>
        { this.renderOptions() }
        <label htmlFor="method">
          Método de pagamento:
          <select onChange={ this.handleChange } name="method" id="method">
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select onChange={ this.handleChange } name="tag" id="tag">
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <button
          onClick={ () => {
            addDespesa(this.state);
            this.resetState();
          } }
          type="button"
        >
          Adicionar Despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  isLoading: state.wallet.isLoading,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  addDespesa: (state) => dispatch(addDespesaThunk(state)),
});

FormDespesas.propTypes = {
  addDespesa: func.isRequired,
  currencies: arrayOf(shape({})).isRequired,
  expenses: arrayOf(shape({})).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormDespesas);
