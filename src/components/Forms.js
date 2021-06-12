import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrencies } from '../actions';

class Forms extends React.Component {
  constructor(props) {
    super(props);

    this.allCurrencies = this.allCurrencies.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      currenciesState: [],
      id: 0,
      value: 0,
      description: '',
      currency: 'USD',
      payment: 'Dinheiro',
      tag: 'Alimentação',

    };
  }

  async componentDidMount() {
    const { fetchCurrenciesHeader } = this.props;
    await fetchCurrenciesHeader();
    this.allCurrencies();
  }

  allCurrencies() {
    const { currencies } = this.props;
    this.setState({ currenciesState: currencies });
  }

  currencies() {
    const { currenciesState } = this.state;

    const filteredCurrency = currenciesState
      .filter((currency) => currency.codein !== 'BRLT');

    return (
      <label htmlFor="currencies">
        Moeda:
        <select id="currency" onChange={ this.handleChange }>
          { filteredCurrency.map((currency) => (
            <option
              key={ currency.code }
              value={ currency.code }
            >
              { currency.code }
            </option>)) }
        </select>
      </label>
    );
  }

  handleChange(event) {
    const { id, value } = event.target;
    this.setState({
      [id]: value,
    });
  }

  render() {
    return (
      <>
        <form>
          <label htmlFor="value">
            Valor:
            <input type="number" id="value" onChange={ this.handleChange } />
          </label>

          <label htmlFor="description">
            Descrição:
            <input type="text" id="description" onChange={ this.handleChange } />
          </label>

          {this.currencies()}

          <label htmlFor="payment">
            Método de pagamento
            <select id="payment" onChange={ this.handleChange }>
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>

          <label htmlFor="tag">
            Tag:
            <select id="tag" onChange={ this.handleChange }>
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
        </form>
        <button type="submit">Adicionar despesa</button>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrenciesHeader: () => dispatch(fetchCurrencies()),
});

Forms.propTypes = {
  currencies: PropTypes.array,
  fetchCurrencies: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Forms);
