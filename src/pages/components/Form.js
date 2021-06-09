/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrency } from '../../actions';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = ({
      currencies: [],
      value: '',
      description: '',
      moeda: '',
      payment: '',
      category: '',
      paymentMethods: ['cartão de Crédito', 'Dinheiro', 'Cartão de débito'],
      tagArray: ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'],
    });

    this.handleCurrencies = this.handleCurrencies.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async componentDidMount() {
    const { fetchAPI } = this.props;

    await fetchAPI();

    this.handleCurrencies();
  }

  handleCurrencies() {
    const { currencies } = this.props;
    const arrayOfCurrencies = Object.keys(currencies);
    const treatedCurrencies = [];

    arrayOfCurrencies.map((currency) => (
      currency !== 'USDT' && treatedCurrencies.push(currency)
    ));

    this.setState({
      currencies: treatedCurrencies,
    });
  }

  handleChange(event, key) {
    this.setState({ [key]: event.target.value });
  }

  makeSelect(label, array, name, chave) {
    return (
      <label htmlFor={ name }>
        { label }
        <select
          name={ name }
          id={ name }
          value={ chave }
          onChange={ (event) => this.handleChange(event, name) }
        >
          {array.map((item, key) => (
            <option value={ item } key={ key }>{ item }</option>
          ))}
        </select>
      </label>
    );
  }

  render() {
    const { currencies, value, description, paymentMethods,
      tagArray, moeda, payment, category } = this.state;

    return (
      <form>
        <h4>Nova Despesa</h4>
        <label htmlFor="valor">
          Valor:
          <input
            type="number"
            name="valor"
            id="valor"
            value={ value }
            onChange={ (event) => this.handleChange(event, 'value') }
          />
        </label>
        <label htmlFor="descricao">
          Descrição:
          <input
            type="text"
            name="descricao"
            id="descricao"
            value={ description }
            onChange={ (event) => this.handleChange(event, 'description') }
          />
        </label>
        {this.makeSelect('Moeda', currencies, 'moeda', moeda)}
        {this.makeSelect('Método de pagamento', paymentMethods, 'payment', payment)}
        {this.makeSelect('Tag', tagArray, 'category', category)}
        <button type="button">Adicionar despesa</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  // email: state.user.email,
  currencies: state.wallet.currencies,
  // expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAPI: () => dispatch(fetchCurrency()) });

Form.propTypes = {
  // email: PropTypes.string.isRequired,
  currencies: PropTypes.objectOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  // expenses: PropTypes.string.isRequired,
  fetchAPI: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
