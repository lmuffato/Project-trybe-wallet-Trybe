import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { saveCurrencies, setExpense, reset } from '../actions';

const INITIAL_STATE = {
  value: '',
  description: '',
  currency: '',
  method: '',
  tag: '',
};

class FormAddDespesas extends React.Component {
  constructor(props) {
    super(props);
    const { edit, editExpense } = this.props;
    if (edit) {
      this.state = { ...editExpense[0] };
    } else {
      this.state = INITIAL_STATE;
    }

    this.handleInputs = this.handleInputs.bind(this);
    this.renderMoeda = this.renderMoeda.bind(this);
    this.renderValor = this.renderValor.bind(this);
    this.renderDescricao = this.renderDescricao.bind(this);
    this.renderMethod = this.renderMethod.bind(this);
    this.renderTag = this.renderTag.bind(this);
    this.renderButton = this.renderButton.bind(this);
    this.saveExpense = this.saveExpense.bind(this);
    this.editExpense = this.editExpense.bind(this);
  }

  componentDidMount() {
    const { getMoedas } = this.props;
    getMoedas();
  }

  handleInputs({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  saveExpense() {
    const { saveExpense } = this.props;
    this.setState({
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
    });
    saveExpense(this.state);
  }

  editExpense() {
    const { resetExpense } = this.props;
    resetExpense(this.state);
  }

  renderMoeda(value) {
    const { currencies } = this.props;
    return (
      <label id="currency" htmlFor="currency">
        Moeda
        <select
          aria-labelledby="currency"
          value={ value }
          onChange={ this.handleInputs }
          name="currency"
          data-testid="currency-input"
        >
          <option value="USD">USD</option>
          { currencies.map((coin) => {
            if (coin !== 'USDT' && coin !== 'USD') {
              return (
                <option
                  value={ coin }
                  key={ coin }
                >
                  {coin}
                </option>
              );
            }
            return '';
          })}
        </select>
      </label>
    );
  }

  renderValor(value) {
    return (
      <label id="value-input" htmlFor="value-input">
        Valor:
        <input
          aria-labelledby="value-input"
          name="value"
          value={ value }
          onChange={ this.handleInputs }
          data-testid="value-input"
        />
      </label>
    );
  }

  renderDescricao(value) {
    return (
      <label id="description-input" htmlFor="description-input">
        Descrição:
        <input
          aria-labelledby="description-input"
          value={ value }
          onChange={ this.handleInputs }
          name="description"
          data-testid="description-input"
        />
      </label>
    );
  }

  renderMethod(value) {
    return (
      <label id="method" htmlFor="method">
        Método de pagamento
        <select
          aria-labelledby="method"
          onChange={ this.handleInputs }
          value={ value }
          name="method"
          data-testid="method-input"
        >
          <option>Selecione uma opção</option>
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>
    );
  }

  renderTag(value) {
    return (
      <label id="tag" htmlFor="tag">
        Tag
        <select
          aria-labelledby="tag"
          onChange={ this.handleInputs }
          value={ value }
          name="tag"
          data-testid="tag-input"
        >
          <option>Selecione uma opção</option>
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
      </label>
    );
  }

  renderButton(edit) {
    return (
      <button
        type="button"
        onClick={ edit ? this.editExpense : this.saveExpense }
      >
        { edit ? 'Editar despesa' : 'Adicionar despesa' }
      </button>
    );
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { edit } = this.props;
    return (
      <div>
        <form>
          { this.renderValor(value) }
          { this.renderDescricao(description) }
          { this.renderMoeda(currency) }
          { this.renderMethod(method) }
          { this.renderTag(tag) }
        </form>
        { this.renderButton(edit) }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  edit: state.wallet.edit,
  editExpense: state.wallet.editExpense,
});

const mapDispatchToProps = (dispatch) => ({
  getMoedas: () => dispatch(saveCurrencies()),
  saveExpense: (expense) => dispatch(setExpense(expense)),
  resetExpense: (expense) => dispatch(reset(expense)),
});

FormAddDespesas.propTypes = {
  currencies: PropTypes.arrayOf({}),
  saveExpense: PropTypes.func,
  reset: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(FormAddDespesas);
