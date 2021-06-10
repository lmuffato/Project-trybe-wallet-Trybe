import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addNewExpenseAction, fetchExchangeRates } from '../../../actions';

class Forms extends React.Component {
  constructor() {
    super();
    this.state = {
      formData: {
        value: 0,
        description: '',
        currency: 'USD',
        method: 'Dinheiro',
        tag: 'Alimentação',
      },
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    const { fetch } = this.props;
    fetch();
  }

  handleInputChange({ target: { name, value } }) {
    const { formData } = this.state;
    const key = (name === 'payment-method' ? 'method' : name);
    this.setState({ formData: { ...formData, [key]: value } });
  }

  handleSubmit(e) {
    e.preventDefault();
    const {
      props: { fetch, setExpenses },
      state: { formData },
    } = this;
    fetch();
    const { exchangeRates, expenses } = this.props;
    const id = uuid();
    setExpenses([
      ...expenses,
      {
        id,
        ...formData,
        exchangeRates,
      },
    ]);
  }

  valueInput() {
    return (
      <label id="value" htmlFor="value">
        Valor
        <input
          aria-labelledby="value"
          type="text"
          name="value"
          onChange={ this.handleInputChange }
        />
      </label>
    );
  }

  descriptionTextArea() {
    return (
      <label id="description" htmlFor="description">
        Descrição
        <textarea
          aria-labelledby="description"
          name="description"
          onChange={ this.handleInputChange }
        />
      </label>
    );
  }

  currencySelect() {
    const { exchangeRates } = this.props;
    return (
      <label id="currency" htmlFor="currency">
        Moeda
        <select
          aria-labelledby="currency"
          name="currency"
          onChange={ this.handleInputChange }
        >
          {exchangeRates
          && Object
            .keys(exchangeRates)
            .filter((key) => key !== 'USDT')
            .map(
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
    );
  }

  paymentMethodSelect() {
    return (
      <label id="payment-method" htmlFor="payment-method">
        Método de pagamento
        <select
          aria-labelledby="payment-method"
          name="payment-method"
          onChange={ this.handleInputChange }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }

  tagSelect() {
    return (
      <label id="tag" htmlFor="tag">
        Tag
        <select
          aria-labelledby="tag"
          name="tag"
          onChange={ this.handleInputChange }
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }

  submitButton() {
    return (
      <button
        type="submit"
        onClick={ this.handleSubmit }
      >
        Adicionar despesa
      </button>
    );
  }

  form() {
    return (
      <form>
        {this.valueInput()}
        {this.descriptionTextArea()}
        {this.currencySelect()}
        {this.paymentMethodSelect()}
        {this.tagSelect()}
        {this.submitButton()}
      </form>
    );
  }

  loading() {
    return <p>Loading</p>;
  }

  render() {
    const { isFetching } = this.props;
    return (
      isFetching ? this.loading() : this.form()
    );
  }
}

const mapStateToProps = (
  { wallet: { exchangeRates, expenses, isFetching } },
) => (
  { exchangeRates, expenses, isFetching }
);
const mapDispatchToProps = (dispatch) => (
  { fetch: () => dispatch(fetchExchangeRates()),
    setExpenses: (expenses) => dispatch(addNewExpenseAction(expenses)) }
);

Forms.propTypes = {
  fetch: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Forms);
