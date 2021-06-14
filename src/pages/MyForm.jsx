import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { myCurrencies, addExpense } from '../actions';

class MyForm extends React.Component {
  constructor() {
    super();

    this.renderInput = this.renderInput.bind(this);
    this.renderMetodo = this.renderMetodo.bind(this);
    this.renderCategoria = this.renderCategoria.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
  }

  componentDidMount() {
    const { moeda } = this.props;
    moeda();
  }

  handleClick() {
    const { id, value, description, currency, method, tag } = this.state;
    const { dispatchExpense } = this.props;
    const expense = {
      id,
      value,
      description,
      currency,
      method,
      tag,
    };
    dispatchExpense(expense);
    this.setState({
      id: id + 1,
      value: '',
      description: '',
    });
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  renderInput() {
    const { value, description } = this.state;
    const { ModCambio } = this.props;
    return (
      <>
        <label htmlFor="valor">
          valor
          <input
            type="number"
            id="valor"
            name="value"
            onChange={ this.handleChange }
            value={ value }
          />
        </label>
        <label htmlFor="Descrição">
          Descrição
          <input
            type="text"
            id="Descrição"
            name="description"
            onChange={ this.handleChange }
            value={ description }
          />
        </label>
        <label htmlFor="Moeda">
          Moeda
          <select id="Moeda" name="currency" onChange={ this.handleChange }>
            {
              ModCambio
                .map((type, index) => (
                  <option key={ index } value={ type }>{type}</option>
                ))
            }
          </select>
        </label>
      </>
    );
  }

  renderMetodo() {
    return (
      <label htmlFor="Mtdpagamento">
        Método de pagamento
        <select id="Mtdpagamento" name="method" onChange={ this.handleChange }>
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }

  renderCategoria() {
    return (
      <label htmlFor="categoria">
        Tag
        <select id="categoria" name="tag" onChange={ this.handleChange }>
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
    return (
      <form>
        { this.renderInput() }
        { this.renderMetodo() }
        { this.renderCategoria() }
        <button
          type="button"
          onClick={ this.handleClick }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapStateToPros = (state) => ({
  ModCambio: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  moeda: () => dispatch(myCurrencies()),
  dispatchExpense: (payload) => dispatch(addExpense(payload)),
});

MyForm.propTypes = {
  moeda: PropTypes.func,
}.isRequired;

export default connect(mapStateToPros, mapDispatchToProps)(MyForm);
