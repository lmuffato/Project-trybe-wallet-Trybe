import React from 'react';
import './expenseForm.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurruencies, addExpenses } from '../../actions/index';

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      description: '',
      currency: '',
      method: '',
      tag: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { dispatchgetCurruencies } = this.props;
    dispatchgetCurruencies();
  }

  handleChange({ target }) {
    const { name } = target;
    const { value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleInput(l, n) {
    return (
      <label htmlFor={ n }>
        { l}
        <input type="text" name={ n } id={ n } onChange={ this.handleChange } />
      </label>
    );
  }

  handleSelect(l, n, array) {
    return (
      <label htmlFor={ n }>
        { l}
        <select name={ n } id={ n } onChange={ this.handleChange }>
          {array.map((a) => <option key={ a } value={ a }>{a}</option>)}
        </select>
      </label>
    );
  }

  handleClick(event) {
    event.preventDefault();
    const { expenses, getExpenses } = this.props;
    const id = expenses.length;
    // const exchangeRates = ;
    getExpenses({ id, ...this.state });
  }

  render() {
    const { currencys } = this.props;

    const methods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <form className="expense">
        { this.handleInput('Valor:', 'value')}
        { this.handleInput('Descrição:', 'description')}
        {this.handleSelect('Moeda:', 'currency', currencys)}
        {this.handleSelect('Método de pagamento:', 'method', methods)}
        {this.handleSelect('Tag:', 'tag', tags)}
        <button type="button" onClick={ this.handleClick }>Adicionar despesa</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchgetCurruencies: () => dispatch(getCurruencies()),
  getExpenses: (e) => dispatch(addExpenses(e)),
});

const mapStateToProps = (state) => ({
  currencys: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

ExpenseForm.propTypes = {
  dispatchgetCurruencies: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);