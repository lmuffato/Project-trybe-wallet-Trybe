import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { wallet as walletAction, getCURRENCIESApiThunk, deleteID } from '../actions';
import getCurrencies from '../serveces/fetchApis';

class Expenses extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleState = this.handleState.bind(this);
  }

  componentDidMount() {
    const { getCurrency } = this.props;
    getCurrency();
  }

  handleChange({ target: { name, value } }) { this.setState({ [name]: value }); }

  handleValue() {
    return (
      <div>
        <label htmlFor="id-valor">
          Valor
          <br />
          <input
            type="text"
            id="id-valor"
            name="value"
            onChange={ this.handleChange }
          />
        </label>
      </div>
    );
  }

  handleCurrency() {
    const { currencies } = this.props;
    const currencys = Object.keys(currencies);
    return (
      <label htmlFor="id-moeda">
        Moeda
        <br />
        <select
          id="id-moeda"
          name="currency"
          onChange={ this.handleChange }
        >
          {currencys.map((currency) => (
            <option key={ currency } value={ currency }>{currency}</option>))}
        </select>
      </label>
    );
  }

  handleMethod() {
    const methods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    return (
      <div>
        <label htmlFor="id-metodoDePagamento">
          Método de pagamento
          <br />
          <select
            id="id-metodoDePagamento"
            name="method"
            onChange={ this.handleChange }
          >
            {methods.map((method) => (
              <option key={ method } value={ method }>{method}</option>))}
          </select>
        </label>
      </div>
    );
  }

  handleTag() {
    return (
      <div>
        <label htmlFor="id-tag">
          Tag
          <br />
          <select
            id="id-tag"
            name="tag"
            onChange={ this.handleChange }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </div>
    );
  }

  handleDescription() {
    return (
      <div>
        <label htmlFor="id-descricao">
          Descrição
          <br />
          <textarea
            id="id-descricao"
            name="description"
            onChange={ this.handleChange }
          />
        </label>
      </div>
    );
  }

  handleState() {
    const { id } = this.state;
    const { wallet } = this.props;
    getCurrencies()
      .then((res) => {
        const { ...moeda } = res;
        this.setState({ id: id + 1, exchangeRates: moeda });
        wallet({ ...this.state, id });
      })
      .catch((error) => error);
  }

  handTable() {
    const cabeçalhoHeader = ['Descrição', 'Tag', 'Método de pagamento', 'Valor', 'Moeda',
      'Câmbio utilizado', 'Valor convertido', 'Moeda de conversão', 'Editar/Excluir'];
    const { expenses, deleteIDAction } = this.props;

    return (
      <table>
        <thead>
          <tr>
            {cabeçalhoHeader.map((descricao) => (
              <th key={ descricao } value={ descricao }>{descricao}</th>))}
          </tr>
        </thead>
        <tbody>
          { expenses.map((expense) => (
            <tr key={ expense.id }>
              <td>{expense.description}</td>
              <td>{expense.tag}</td>
              <td>{expense.method}</td>
              <td>{expense.value}</td>
              <td>{expense.exchangeRates[expense.currency].name.split('/', 1)}</td>
              <td>{Number(expense.exchangeRates[expense.currency].ask).toFixed(2)}</td>
              <td>
                {(Number(expense.exchangeRates[expense.currency].ask)
                 * Number(expense.value)).toFixed(2)}
              </td>
              <td>Real</td>
              <td>
                <button
                  type="button"
                  data-testid="delete-btn"
                  onClick={ () => deleteIDAction(expense.id) }
                >
                  Excluir
                </button>
              </td>
            </tr>
          )) }
        </tbody>
      </table>
    );
  }

  render() {
    return (
      <>
        <h1>Despesa</h1>
        <form>
          {/* Valor */}
          {this.handleValue()}

          {/* Moeda */}
          {this.handleCurrency()}

          {/* // MetodoDePagamento */}
          {this.handleMethod()}

          {/* Tag */}
          {this.handleTag()}

          {/* <Descricao */}
          {this.handleDescription()}

          <button
            type="button"
            onClick={ this.handleState }
          >
            Adicionar despesa
          </button>
        </form>
        {this.handTable()}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  wallet: (state) => dispatch(walletAction(state)),
  getCurrency: () => dispatch(getCURRENCIESApiThunk()),
  deleteIDAction: (id) => dispatch(deleteID(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Expenses);

Expenses.propTypes = {
  wallet: PropTypes.func,
}.isRequired;
