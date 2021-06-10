import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrencyThunk, addExpense, getExchange } from '../actions';

class Form extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.returnInfo = this.returnInfo.bind(this);
    this.state = {
      valor: 0,
      descricao: '',
      moeda: '',
      pagamento: '',
      tag: '',
    };
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState(({
      [name]: value,
    }));
  }

  returnInfo() {
    const { valor, descricao, moeda, pagamento, tag } = this.state;
    const { getExpenses } = this.props;
    const obj = {
      id: getExpenses.length,
      value: valor,
      description: descricao,
      currency: moeda,
      method: pagamento,
      tag,
    };
    getExchange(obj);
    return obj;
  }

  render() {
    const payments = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tag = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const { currencies, saveExchange } = this.props;
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input name="valor" type="number" id="valor" onChange={ this.handleChange } />
        </label>
        <label htmlFor="despesa">
          Descrição
          <input
            name="descricao"
            type="text"
            id="despesa"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select id="moeda" name="moeda" onChange={ this.handleChange }>
            {currencies
              .map((currencie, index) => <option key={ index }>{currencie}</option>)}
          </select>
        </label>
        <label htmlFor="pagamento">
          Método de pagamento
          <select name="pagamento" id="pagamento" onChange={ this.handleChange }>
            {payments.map((payment, index) => <option key={ index }>{payment}</option>)}
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select name="tag" id="tag" onChange={ this.handleChange }>
            {tag.map((expense, index) => <option key={ index }>{expense}</option>)}
          </select>

        </label>
        <button
          type="button"
          onClick={ () => saveExchange(this.returnInfo()) }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(getCurrencyThunk()),
  saveExchange: (exchange) => dispatch(getExchange(exchange)),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  getExpenses: state.wallet.expenses,
});

Form.propTypes = {
  getCurrencies: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  saveExchange: PropTypes.func.isRequired,
  getExpenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
