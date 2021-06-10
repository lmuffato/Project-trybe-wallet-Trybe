import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrencesThunk } from '../actions/index';
import './forms.css';

class Forms extends React.Component {
  constructor() {
    super();

    this.valorInput = this.valorInput.bind(this);
    this.descricaoInput = this.descricaoInput.bind(this);
    this.moedasInput = this.moedasInput.bind(this);
    this.pagamentoInput = this.pagamentoInput.bind(this);
    this.tagsInput = this.tagsInput.bind(this);
  }

  componentDidMount() {
    const { getCurrences } = this.props;

    getCurrences();
  }

  valorInput() {
    return (
      <label htmlFor="Valor" className="label-valor">
        Valor:
        <input
          className="input-valor"
          id="Valor"
          type="number"
          step={ 0 }
          min={ 0 }
          name="valor"
        />
      </label>
    );
  }

  descricaoInput() {
    return (
      <label htmlFor="Descrição" className="label-descricao">
        Descrição:
        <input
          className="input-descricao"
          id="Descrição"
          type="text"
          name="descricao"
        />
      </label>
    );
  }

  moedasInput() {
    const { currencieStore } = this.props;
    const currencies = Object.keys(currencieStore);
    return (
      <label htmlFor="moedas" className="label-moeda">
        Moeda:
        <select
          className="input-moeda"
          id="moedas"
        >
          { currencies
            .map((currencie, index) => (<option key={ index }>{ currencie }</option>))}
        </select>
      </label>
    );
  }

  pagamentoInput() {
    return (
      <label htmlFor="Pagamento" className="label-pagamento">
        Método de pagamento:
        <select
          className="input-pagamento"
          id="Pagamento"
        >
          <option value="money">Dinheiro</option>
          <option value="credit-cart">Cartão de crédito</option>
          <option value="debit-cart">Cartão de Débito</option>
        </select>
      </label>
    );
  }

  tagsInput() {
    return (
      <label htmlFor="Tags" className="label-tags">
        Tag:
        <select
          className="input-tags"
          id="Tags"
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

  render() {
    const { valorInput, moedasInput, pagamentoInput, tagsInput, descricaoInput } = this;
    return (
      <main>
        <form>
          {valorInput()}
          {moedasInput()}
          {pagamentoInput()}
          {tagsInput()}
          {descricaoInput()}
        </form>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  currencieStore: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrences: () => dispatch(getCurrencesThunk()),
});

Forms.propTypes = {
  getCurrences: PropTypes.func.isRequired,
  currencieStore: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Forms);
