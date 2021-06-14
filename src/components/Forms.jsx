/* eslint-disable react/no-unused-state */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrencesThunk, getCurrencesThunk2 } from '../actions/index';
import './forms.css';

class Forms extends React.Component {
  constructor() {
    super();

    this.state = {
      id: 0,
      value: '0',
      description: '',
      currency: '',
      method: '',
      tag: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.valorInput = this.valorInput.bind(this);
    this.descricaoInput = this.descricaoInput.bind(this);
    this.moedasInput = this.moedasInput.bind(this);
    this.pagamentoInput = this.pagamentoInput.bind(this);
    this.tagsInput = this.tagsInput.bind(this);
    this.sendData = this.sendData.bind(this);
    this.submit = this.submit.bind(this);
  }

  componentDidMount() {
    const { getCurrences } = this.props;

    getCurrences();
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  valorInput() {
    const { handleChange } = this;
    const { value } = this.state;
    return (
      <label htmlFor="Valor" className="label-valor">
        Valor:
        <input
          className="input-valor"
          id="Valor"
          type="number"
          name="value"
          value={ value }
          step={ 0 }
          min={ 0 }
          onChange={ ({ target }) => handleChange({ target }) }
        />
      </label>
    );
  }

  descricaoInput() {
    const { handleChange } = this;
    const { description } = this.state;
    return (
      <label htmlFor="Descrição" className="label-descricao">
        Descrição:
        <input
          className="input-descricao"
          id="Descrição"
          type="text"
          name="description"
          value={ description }
          onChange={ ({ target }) => handleChange({ target }) }
        />
      </label>
    );
  }

  moedasInput() {
    const { handleChange } = this;
    const { currency } = this.state;
    const { currencieStore } = this.props;
    const currencies = Object.keys(currencieStore);
    return (
      <label htmlFor="moedas" className="label-moeda">
        Moeda:
        <select
          className="input-moeda"
          id="moedas"
          name="currency"
          value={ currency }
          onChange={ ({ target }) => handleChange({ target }) }
        >
          { currencies
            .map((currencie, index) => (<option key={ index }>{ currencie }</option>))}
        </select>
      </label>
    );
  }

  pagamentoInput() {
    const { handleChange } = this;
    const { method } = this.state;
    return (
      <label htmlFor="Pagamento" className="label-pagamento">
        Método de pagamento:
        <select
          className="input-pagamento"
          id="Pagamento"
          name="method"
          value={ method }
          onChange={ ({ target }) => handleChange({ target }) }
        >
          <option value="money">Dinheiro</option>
          <option value="credit-cart">Cartão de crédito</option>
          <option value="debit-cart">Cartão de Débito</option>
        </select>
      </label>
    );
  }

  tagsInput() {
    const { handleChange } = this;
    const { tag } = this.state;
    return (
      <label htmlFor="Tags" className="label-tags">
        Tag:
        <select
          className="input-tags"
          id="Tags"
          name="tag"
          value={ tag }
          onChange={ ({ target }) => handleChange({ target }) }
        >
          <option value="Alimentacao">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saude">Saúde</option>
        </select>
      </label>
    );
  }

  sendData(state) {
    const { newFetchAPI } = this.props;

    this.setState((prevState) => ({
      id: prevState.id + 1,
    }));

    newFetchAPI(state);
  }

  submit() {
    const { sendData } = this;
    const { state } = this;

    return (
      <button
        type="button"
        onClick={ () => sendData(state) }
      >
        Adicionar despesa
      </button>
    );
  }

  render() {
    const {
      valorInput, moedasInput, pagamentoInput, tagsInput, descricaoInput, submit,
    } = this;

    return (
      <main>
        <form>
          {valorInput()}
          {moedasInput()}
          {pagamentoInput()}
          {tagsInput()}
          {descricaoInput()}
          {submit()}
        </form>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  currencieStore: state.wallet.currencies,
  // expensesStore: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrences: () => dispatch(getCurrencesThunk()),
  newFetchAPI: (state) => dispatch(getCurrencesThunk2(state)),
});

Forms.propTypes = {
  getCurrences: PropTypes.func.isRequired,
  newFetchAPI: PropTypes.func.isRequired,
  currencieStore: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.string,
  })).isRequired,
  // expensesStore: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Forms);
