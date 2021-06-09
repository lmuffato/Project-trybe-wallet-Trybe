import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrency } from '../../actions';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = ({
      currencies: [],
    });

    this.handleCurrencies = this.handleCurrencies.bind(this);
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

  render() {
    const { currencies } = this.state;

    return (
      <form>
        <h4>Nova Despesa</h4>
        <label htmlFor="valor">
          Valor:
          <input type="number" name="valor" id="valor" />
        </label>
        <label htmlFor="descricao">
          Descrição:
          <input type="texbox" name="descricao" id="descricao" />
        </label>
        <label htmlFor="moeda">
          Moeda:
          <select name="moeda" id="moeda">
            <option>BRL</option>
            {currencies.map((currency, key) => (
              <option key={ key }>{ currency }</option>
            ))}
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento:
          <select name="payment" id="payment">
            <option>Cartão de crédito</option>
            <option>Dinheiro</option>
            <option>Cartão de Débito</option>
          </select>
        </label>
        <label htmlFor="category">
          Tag:
          <select name="category" id="category">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
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
