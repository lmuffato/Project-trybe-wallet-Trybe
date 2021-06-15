import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrencies, addExpense } from '../actions/index';

class Forms extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.renderOptionByAPI = this.renderOptionByAPI.bind(this);
    this.handleValuefromInputAndSendToState = this
      .handleValuefromInputAndSendToState.bind(this);
    this.renderInputs = this.renderInputs.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { fetchAPI } = this.props;
    fetchAPI();
  }

  handleValuefromInputAndSendToState({ target: { value, name } }) {
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { id, value, description, currency, method, tag } = this.state;
    const { sendExpense } = this.props;
    const expense = {
      id,
      value,
      description,
      currency,
      method,
      tag,
    };
    sendExpense(expense);
    this.setState({
      id: id + 1,
      value: '',
      description: '',
    });
  }

  renderOptionByAPI() {
    const { currencies } = this.props;
    return currencies.map((coin) => (
      <option data-testid={ coin } key={ coin }>{ coin }</option>
    ));
  }

  renderInputs() {
    const { value, description } = this.state;
    return (
      <>
        <label htmlFor="valor">
          Valor
          <input
            id="valor"
            type="text"
            onChange={ this.handleValuefromInputAndSendToState }
            name="value"
            value={ value }
          />
        </label>
        <label htmlFor="descriçao">
          Descrição
          <input
            id="descriçao"
            type="text"
            onChange={ this.handleValuefromInputAndSendToState }
            name="description"
            value={ description }
          />
        </label>
      </>
    );
  }

  render() {
    return (
      <div>
        <form>
          { this.renderInputs() }
          <label htmlFor="moeda">
            Moeda
            <select
              id="moeda"
              onChange={ this.handleValuefromInputAndSendToState }
              name="currency"
            >
              { this.renderOptionByAPI() }
            </select>
          </label>
          <label htmlFor="mtdPagamento">
            Método de pagamento
            <select
              id="mtdPagamento"
              name="method"
              onChange={ this.handleValuefromInputAndSendToState }
            >
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select
              id="tag"
              name="tag"
              onChange={ this.handleValuefromInputAndSendToState }
            >
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
          <button type="button" onClick={ this.handleClick }>Adicionar despesa</button>
        </form>
      </div>
    );
  }
}

const mapStateToPros = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAPI: () => dispatch(getCurrencies()),
  sendExpense: (payload) => dispatch(addExpense(payload)),

});

Forms.propTypes = {
  fetchAPI: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.object).isRequired,
  sendExpense: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToPros, mapDispatchToProps)(Forms);
