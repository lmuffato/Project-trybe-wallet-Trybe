import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { requestAPI, expensesAction } from '../actions/index';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      value: '',
      currency: '',
      method: '',
      tag: '',
      description: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.addExpense = this.addExpense.bind(this);
  }

  componentDidMount() {
    const { getApi } = this.props;
    getApi();
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  addExpense() {
    const { currencies, setGlobalExpenses, getApi } = this.props;
    getApi();
    console.log(currencies);
    const payloader = {
      ...this.state,
      exchangeRates: currencies,
    };
    console.log(payloader);
    setGlobalExpenses(payloader);
    this.setState((prevState) => ({ id: prevState.id + 1 }));
  }

  render() {
    const { currencies } = this.props;
    const keys = Object.keys(currencies)
      .filter((curency) => curency !== 'USDT');

    return (
      <div>
        <form className="expense-form">
          <label htmlFor="valor">
            Valor
            <input id="valor" name="value" onChange={ this.handleChange } />
          </label>
          <label htmlFor="moeda">
            Moeda
            <select id="moeda" name="currency" onChange={ this.handleChange }>
              {keys.map((currencyKey) => (
                <option key={ currencyKey }>{currencyKey}</option>))}
            </select>
          </label>
          <label htmlFor="payment">
            Método de pagamento
            <select id="payment" name="method" onChange={ this.handleChange }>
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="typeOfExpense">
            Tag
            <select id="typeOfExpense" name="tag" onChange={ this.handleChange }>
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
          <label htmlFor="descricao">
            Descrição
            <input id="descricao" name="description" onChange={ this.handleChange } />
          </label>
          <button type="button" name="addButton" onClick={ this.addExpense }>
            Adicionar despesa
          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  getApi: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  setGlobalExpenses: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
  currencies: state.wallet.currencies,
});

const mapDispachToProps = (dispatch) => ({
  getApi: () => dispatch(requestAPI()),
  setGlobalExpenses: (payload) => dispatch(expensesAction(payload)),
});

export default connect(mapStateToProps, mapDispachToProps)(Form);
