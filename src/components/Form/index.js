import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchByAll } from '../../services/api/servicesApi';
import { addExpense, getCurrenciesThunk } from '../../actions/index';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.generateSelect = this.generateSelect.bind(this);
    this.generateInput = this.generateInput.bind(this);
    this.generateButton = this.generateButton.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.fetchByAll = this.getByAll.bind(this);

    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
  }

  componentDidMount() {
    const { getByCurrency } = this.props;
    getByCurrency();
  }

  getByAll() {
    const data = fetchByAll();
    return data;
  }

  async handleClick() {
    const { addNewExpense, expenses } = this.props;

    addNewExpense({
      ...this.state,
      id: expenses.length,
      exchangeRates: await this.getByAll(),
    });
    this.setState({
      value: 0,
      description: '',
      currency: '',
      method: '',
      tag: '',
    });
  }

  handleChange(event) {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  generateSelect(name, label, optionArray) {
    return (
      <label htmlFor={ name }>
        {label}
        <select
          name={ name }
          id={ name }
          onChange={ (e) => this.handleChange(e) }
        >
          {optionArray.map((element, index) => <option key={ index }>{element}</option>)}
        </select>
      </label>
    );
  }

  generateInput(name, label, type) {
    return (
      <label htmlFor={ name }>
        {label}
        <input
          type={ type }
          name={ name }
          id={ name }
          onChange={ (e) => this.handleChange(e) }
        />
      </label>
    );
  }

  generateButton() {
    return (
      <button
        type="button"
        onClick={ (e) => this.handleClick(e) }
      >
        Adicionar despesa
      </button>
    );
  }

  render() {
    const optionTag = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const optionPayment = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const { currencies } = this.props;

    return (
      <form>
        {this.generateInput('value',
          'Valor:', 'number')}
        {this.generateInput('description',
          'Descrição', 'text')}
        {this.generateSelect('currency',
          'Moeda', currencies)}
        {this.generateSelect('method',
          'Método de pagamento', optionPayment)}
        {this.generateSelect('tag', 'Tag', optionTag)}
        {this.generateButton()}
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  getByCurrency: () => dispatch(getCurrenciesThunk()),
  addNewExpense: (expense) => dispatch(addExpense(expense)),
});

Form.propTypes = {
  currencies: PropTypes.shape(PropTypes.string || PropTypes.object || PropTypes.array),
  expenses: PropTypes.arrayOf(PropTypes.object),
  getCurrencies: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Form);
