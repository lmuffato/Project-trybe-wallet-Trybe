import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExpense, getCurrenciesThunk, handleChangeInputAction } from '../../actions';
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
    const { addExpenseSend, form } = this.props;
    await addExpenseSend({
      ...form,
      exchangeRates: await fetch('https://economia.awesomeapi.com.br/json/all')
        .then((res) => res.json()),
    });
  }

  render() {
    const { currencies, isLoading, handleChangeInput } = this.props;
    const { form } = this.props;
    const { value, description, currency, method, tag } = form;
    if (isLoading) return 'Carregando...';
    return (
      <form>
        <Inputs
          name="value"
          type="number"
          value={ value }
          handleChangeInput={ handleChangeInput }
        >
          Valor:
        </Inputs>
        <Inputs
          name="description"
          value={ description }
          handleChangeInput={ handleChangeInput }
        >
          Descrição:
        </Inputs>
        <Selects
          name="currency"
          role="combobox"
          value={ currency }
          currencies={ currencies }
          handleChangeInput={ handleChangeInput }
        >
          Moeda:
        </Selects>
        <SelectMethod
          name="method"
          value={ method }
          handleChangeInput={ handleChangeInput }
          optionsMethod={ optionsMethod }
        />
        <SelectTag
          name="tag"
          value={ tag }
          handleChangeInput={ handleChangeInput }
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
  form: state.form,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(getCurrenciesThunk()),
  addExpenseSend: (expense) => dispatch(addExpense(expense)),
  handleChangeInput: ({
    target: { name, value },
  }) => dispatch(handleChangeInputAction(name, value)),
});

Form.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  isLoading: PropTypes.bool,
  getCurrencies: PropTypes.func.isRequired,
  addExpenseSend: PropTypes.func.isRequired,
  form: PropTypes.oneOfType([PropTypes.object]).isRequired,
  handleChangeInput: PropTypes.func.isRequired,
};

Form.defaultProps = {
  isLoading: false,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
