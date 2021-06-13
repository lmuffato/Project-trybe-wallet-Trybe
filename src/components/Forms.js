import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addDespesas } from '../actions';
import requestApi from '../services/requestApi';

const API = 'https://economia.awesomeapi.com.br/json/all';

class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exchangeRates: {},
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: '',
      tag: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        delete data.USDT;
        this.setState({
          exchangeRates: data,
          currency: 'USD',
          method: 'Dinheiro',
          tag: 'Alimentação',
        });
      });
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  async handleClick(expensesProps) {
    const fetchGetApi = await requestApi();
    return (
      expensesProps(this.state, fetchGetApi),
      this.setState((estadoAnterior) => ({
        id: estadoAnterior.id + 1,
      }))
    );
  }

  selectsForms() {
    const { exchangeRates } = this.state;
    return (
      <div>
        <label htmlFor="coins">
          Moeda
          <select
            name="currency"
            id="coins"
            onChange={ this.handleChange }
          >
            {Object.keys(exchangeRates)
              .map((coin) => (<option key={ coin } value={ coin }>{coin}</option>))}

          </select>
        </label>
        <label htmlFor="payment">
          Método de Pagamento
          <select
            name="method"
            id="payment"
            onChange={ this.handleChange }
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select
            name="tag"
            id="tag"
            onChange={ this.handleChange }
          >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </div>
    );
  }

  render() {
    const { expensesProps } = this.props;

    return (
      <form>
        <label htmlFor="value">
          Valor
          <input
            type="number"
            name="value"
            id="value"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="description">
          Descrição
          <textarea
            type="text"
            name="description"
            id="description"
            onChange={ this.handleChange }
          />
        </label>
        {this.selectsForms()}
        <button
          onClick={ () => this.handleClick(expensesProps) }
          type="button"
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  expensesProps: (despesaAtual, getCoin) => dispatch(addDespesas(despesaAtual, getCoin)),
});

Forms.propTypes = {
  expensesProps: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Forms);

// requisito 08 obtive grande ajude do colega de classe Perycles.
