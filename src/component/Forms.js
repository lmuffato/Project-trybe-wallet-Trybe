import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { dataExpenses, fetchCurrencies } from '../actions';
import { formSelector, formInput } from './FormsMethods';

class Forms extends React.Component {
  constructor(props) {
    super(props);
    // const { currenciesDispatch } = this.props;
    this.state = {
      // id: 0,
      value: 0,
      description: '',
      // currencie: '',
      // method: '',
      // tag: '',
      // exchangeRates: {
      //   ...currenciesDispatch,
      // }
    };
    this.handleChange = this.handleChange.bind(this);
    this.optionsCurrecies = this.optionsCurrecies.bind(this);
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

  render() {
    const { expensesDispach } = this.props;
    const { value, description } = this.state;
    const optionsMethod = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const optionsTag = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <div>
        <form>
          {formInput('Valor', 'value', this.handleChange)}
          {formInput('Descrição', 'description', this.handleChange)}
          {formSelector('Moeda', this.optionsCurrecies())}
          {formSelector('Método de pagamento', optionsMethod)}
          {formSelector('Tag', optionsTag)}
        </form>
        <button
          type="button"
          onClick={ () => expensesDispach(value, description) }
        >
          Adicionar Despesa
        </button>
      </div>
    );
  }
}

Forms.propTypes = {
  currenciesState: PropTypes.func.isRequired,
  currenciesDispatch: PropTypes.func.isRequired,
  expensesDispach: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currenciesState: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  currenciesDispatch: () => dispatch(fetchCurrencies()),
  expensesDispach: (payload) => dispatch(dataExpenses(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Forms);
