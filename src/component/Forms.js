import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { dataExpenses, fetchCurrencies } from '../actions';
import { formSelector, formInput } from './FormsMethods';

class Forms extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      description: '',
      currencie: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.handleChange = this.handleChange.bind(this);
    this.optionsCurrecies = this.optionsCurrecies.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { currenciesDispatch } = this.props;
    currenciesDispatch();
  }

  handleChange(e) {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  }

  optionsCurrecies() {
    const { currenciesState } = this.props;
    const arrayCurrencies = Object.keys(currenciesState);
    return arrayCurrencies;
  }

  handleClick() {
    const { expensesDispach, expensesState, currenciesState } = this.props;
    console.log(currenciesState);
    const id = expensesState.length;
    const currenciesApi = currenciesState;
    expensesDispach({
      id,
      ...this.state,
      exchangeRates: currenciesApi,
    });
  }

  render() {
    const optionMethod = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const optionsTag = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <div>
        <form>
          {formInput('Valor', 'value', this.handleChange)}
          {formInput('Descrição', 'description', this.handleChange)}
          {formSelector('Moeda', this.optionsCurrecies(), 'currencie', this.handleChange)}
          {formSelector('Método de pagamento', optionMethod, 'method', this.handleChange)}
          {formSelector('Tag', optionsTag, 'tag', this.handleChange)}
        </form>
        <button
          type="button"
          onClick={ () => console.log(this.handleClick()) }
        >
          Adicionar Despesa
        </button>
      </div>
    );
  }
}

Forms.propTypes = {
  currenciesState: PropTypes.func,
  currenciesDispatch: PropTypes.func,
  expensesDispach: PropTypes.func,
  expensesState: PropTypes.array,
}.isRequired;

const mapStateToProps = (state) => ({
  currenciesState: state.wallet.currencies,
  expensesState: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  currenciesDispatch: () => dispatch(fetchCurrencies()),
  expensesDispach: (payload) => dispatch(dataExpenses(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Forms);
