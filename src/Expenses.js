import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { expensesActionThunk } from './actions';

const rotulos = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
const metodos = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];

class Expenses extends React.Component {
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
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    const { expenses } = this.props;
    this.setState({
      id: expenses.length ? expenses.length : 0,
      [name]: value,
    });
  }

  render() {
    const { currencies, add } = this.props;
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input type="number" name="value" id="value" onChange={ this.handleChange } />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            type="text"
            name="description"
            id="description"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select onChange={ this.handleChange } name="currency" id="currency">
            { currencies ? currencies.map((moeda) => (
              <option key={ moeda }>{moeda}</option>
            )) : '' }
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento:
          <select onChange={ this.handleChange } id="method" name="method">
            { metodos.map((metodo) => (<option key={ metodo }>{metodo}</option>)) }
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select onChange={ this.handleChange } id="tag" name="tag">
            { rotulos.map((rotulo) => (<option key={ rotulo }>{rotulo}</option>)) }
          </select>
        </label>
        <button onClick={ () => add(this.state) } type="button">
          Adicionar Despesa
        </button>
      </form>
    );
  }
}

Expenses.propTypes = {
  currencies: PropTypes.arrayOf([]).isRequired,
  add: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf([]).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  add: (data) => dispatch(expensesActionThunk(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Expenses);
