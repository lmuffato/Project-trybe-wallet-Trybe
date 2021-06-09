import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExpense, getCurrenciesThunk } from '../../actions';
import Inputs from './Inputs';
import Selects from './Selects';
import SelectMethod from './Selects/SelectMethod';
import SelectTag from './Selects/SelectTag';

const optionsTag = [
  'Alimentação',
  'Lazer',
  'Transporte',
  'Trabalho',
  'Saúde',
];

const optionsMethod = [
  'Dinheiro',
  'Cartão de crédito',
  'Cartão de débito',
];

class Form extends Component {
  constructor() {
    super();

    this.state = {
      value: 0,
      description: '',
      currency: '',
      method: '',
      tag: '',
    };

    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  handleChangeInput({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  async fetchData() {
    const { addExpenseSend } = this.props;
    await addExpenseSend({
      ...this.state,
      exchangeRates: await fetch('https://economia.awesomeapi.com.br/json/all')
        .then((res) => res.json()),
    });
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { currencies, isLoading } = this.props;
    if (isLoading) return 'Carregando...';
    return (
      <form>
        <Inputs
          name="value"
          type="number"
          value={ value }
          handleChangeInput={ this.handleChangeInput }
        >
          Valor:
        </Inputs>
        <Inputs
          name="description"
          value={ description }
          handleChangeInput={ this.handleChangeInput }
        >
          Descrição:
        </Inputs>
        <Selects
          name="currency"
          role="combobox"
          value={ currency }
          currencies={ currencies }
          handleChangeInput={ this.handleChangeInput }
        >
          Moeda:
        </Selects>
        <SelectMethod
          name="method"
          value={ method }
          handleChangeInput={ this.handleChangeInput }
          optionsMethod={ optionsMethod }
        />
        <SelectTag
          name="tag"
          value={ tag }
          handleChangeInput={ this.handleChangeInput }
          optionsMethod={ optionsTag }
        />
        <button type="button" onClick={ this.fetchData }>
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  isLoading: state.wallet.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(getCurrenciesThunk()),
  addExpenseSend: (expense) => dispatch(addExpense(expense)),
});

Form.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  isLoading: PropTypes.bool,
  getCurrencies: PropTypes.func.isRequired,
  addExpenseSend: PropTypes.func.isRequired,
};

Form.defaultProps = {
  isLoading: false,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
