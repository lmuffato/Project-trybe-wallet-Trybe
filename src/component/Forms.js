import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { dataExpenses, fetchCurrencies } from '../actions';

class Forms extends React.Component {
  constructor(props) {
    super(props);
    const { currenciesDispatch } = this.props;
    this.state = {
      id: 0,
      value: 0,
      description: '',
      currencie: '',
      method: '',
      tag: '',
      exchangeRates: {
        ...currenciesDispatch,
      }
    };


    // this.handleChange = this.handleChange.bind(this);
    this.optionsCurrecies = this.optionsCurrecies.bind(this);
  }

  componentDidMount() {
    const { currenciesDispatch } = this.props;
    currenciesDispatch();
  }

  // handleChange({ target }) {
  //   const { value, name } = target;
  //   this.setState({
  //     [name]: value,
  //   });
  // }

  optionsCurrecies() {
    const { currenciesState } = this.props;
    const arrayCurrencies = Object.keys(currenciesState);
    return arrayCurrencies;
  }

  formSelector(name, arrayOptions, expense, func) {
    return (
      <div>
        <label
          htmlFor={ name }
          name={ expense }
          onChange={ func }
        >
          { `${name}: ` }
          <select aria-label={ name }>
            { arrayOptions.map((options) => <option key={ options }>{options}</option>)}
          </select>
        </label>
      </div>
    );
  }

  formInput(title, expense) {
    return (
      <div>
        <label htmlFor={ title }>
          { `${title}: ` }
          <input
            aria-label={ title }
            type="text"
            name={ expense }
            onChange={ ({ target }) => {
              const { value, name } = target;
              this.setState({
                [name]: value,
              });
            } }
          />
        </label>
      </div>
    );
  }

  render() {
    const { expensesDispach } = this.props;
    const { value, description } = this.state;
    const optionsMethod = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const optionsTag = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <div>
        <form>
          { this.formInput('Valor', 'value') }
          { this.formInput('Descrição', 'description') }
          {this.formSelector('Moeda', this.optionsCurrecies())}
          {this.formSelector('Método de pagamento', optionsMethod)}
          {this.formSelector('Tag', optionsTag)}
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
