import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrencyThunk } from '../actions/getCurrencyActions';
import { createExchange } from '../actions/tableActions';
import apiRequest from '../services/apiRequest';
import Selects from './Selects';
import Inputs from './Inputs';
import '../styles/FormsAndEdit.css';

class Forms extends React.Component {
  constructor() {
    super();

    this.state = {
      id: 0,
      value: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
      exchangeRates: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleExchanges = this.handleExchanges.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  componentDidMount() {
    const { getCurrency } = this.props;
    getCurrency();
    this.resetState();
  }

  handleChange({ target: { name, value } }) {
    const { expenses } = this.props;
    this.setState({
      [name]: value,
      id: expenses.length,
    });
  }

  resetState() {
    this.setState({
      id: 0,
      value: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
      exchangeRates: {},
    });
  }

  async handleExchanges() {
    const { getExchange } = this.props;
    const answer = await apiRequest();
    delete answer.USDT;
    this.setState({ exchangeRates: answer });
    getExchange(this.state);
    this.resetState();
  }

  render() {
    return (
      <form className="form">
        <Inputs
          handleChange={ this.handleChange }
          states={ this.state }
        />
        <Selects
          handleChange={ this.handleChange }
          states={ this.state }
        />
        <button
          type="button"
          className="field button"
          onClick={ this.handleExchanges }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = ({ wallet: {
  currencies, expenses, edit, item,
} }) => ({
  currencies,
  expenses,
  edit,
  item,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrency: () => dispatch(getCurrencyThunk()),
  getExchange: (state) => dispatch(createExchange(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Forms);

Forms.propTypes = {
  currencies: PropTypes.array,
  getCurrency: PropTypes.func,
  getExchange: PropTypes.func,
}.isRequired;
