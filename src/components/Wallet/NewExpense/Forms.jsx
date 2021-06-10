import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addNewExpenseAction, fetchExchangeRates } from '../../../actions';

class Forms extends React.Component {
  constructor() {
    super();
    this.state = {
      currencies: [],
      formData: {
        value: 0,
        description: '',
        currency: 'USD',
        method: 'cash',
        tag: 'food',
      },
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.form = this.form.bind(this);
  }

  componentDidMount() {
    const { fetch } = this.props;
    Promise.resolve(fetch())
      .then(() => {
        const { exchangeRates } = this.props;
        return Object.keys(exchangeRates).filter((key) => key !== 'USDT');
      })
      .then((currencies) => this.setState({ currencies }));
  }

  handleInputChange({ target: { name, value } }) {
    const { form } = this.state;
    const key = (name === 'payment-method' ? 'method' : name);
    this.setState({ form: { ...form, [key]: value } });
  }

  handleSubmit(e) {
    e.preventDefault();
    const {
      props: { fetch, setExpenses },
      state: { formData },
    } = this;
    Promise.resolve(fetch())
      .then(() => {
        const { exchangeRates, expenses } = this.props;
        const id = expenses.length;
        setExpenses([
          ...expenses,
          {
            id,
            ...formData,
            exchangeRates,
          },
        ]);
      });
  }

  form(currencies) {
    return (
      <form>
        <label id="value" htmlFor="value">
          Valor
          <input aria-labelledby="value" type="text" name="value" onChange={ this.handleInputChange } />
        </label>
        <label id="description" htmlFor="description">
          Descrição
          <textarea aria-labelledby="description" name="description" onChange={ this.handleInputChange } />
        </label>
        <label id="currency" htmlFor="currency">
          Moeda
          <select aria-labelledby="currency" name="currency" onChange={ this.handleInputChange }>
            {currencies.map(
              (currency, key) => (
                <option
                  value={ currency }
                  key={ key }
                >
                  {currency}
                </option>
              ),
            )}
          </select>
        </label>
        <label id="payment-method" htmlFor="payment-method">
          Método de pagamento
          <select aria-labelledby="payment-method" name="payment-method" onChange={ this.handleInputChange }>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label id="tag" htmlFor="tag">
          Tag
          <select aria-labelledby="tag" name="tag" onChange={ this.handleInputChange }>
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <button type="submit" onClick={ this.handleSubmit }>Adicionar despesa</button>
      </form>
    );
  }

  loading() {
    return <p>Loading</p>;
  }

  render() {
    const { isFetching } = this.props;
    const { currencies } = this.state;
    return (
      isFetching ? this.loading() : this.form(currencies)
    );
  }
}

const mapStateToProps = (
  { wallet: { exchangeRates, expenses } },
) => (
  { exchangeRates, expenses }
);
const mapDispatchToProps = (dispatch) => (
  { fetch: () => dispatch(fetchExchangeRates()),
    setExpenses: (expenses) => dispatch(addNewExpenseAction(expenses)) }
);

Forms.propTypes = {
  fetch: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Forms);
