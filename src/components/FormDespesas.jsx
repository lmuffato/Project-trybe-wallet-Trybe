import React, { Component } from 'react';
import { connect } from 'react-redux';

class FormDespesas extends Component {
  constructor() {
    super();
    this.renderOptions = this.renderOptions.bind(this);
  }

  renderOptions() {
    const { currencies } = this.props;
    return (
      <select name="moeda" id="moeda">
        { currencies.map((moeda) => (
          <option key={ moeda }>{moeda}</option>
        )) }
      </select>
    );
  }

  render() {
    const { currencies, isLoading } = this.props;
    console.log(currencies, isLoading);

    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input type="number" name="valor" id="valor" />
        </label>
        <label htmlFor="despesa">
          Descrição:
          <input type="text" name="despesa" id="despesa" />
        </label>
        <label htmlFor="moeda">
          Moeda:
          { this.renderOptions() }
        </label>
        <label htmlFor="pagamento">
          Método de pagamento:
          <select name="pagamento" id="pagamento">
            <option value="dinheiro">Dinheiro</option>
            <option value="credito">Cartão de crédito</option>
            <option value="debito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select name="tag" id="tag">
            <option value="alimentacao">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saude">Saúde</option>
          </select>
        </label>
        <button type="button">Adicionar Despesa</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  isLoading: state.wallet.isLoading,
});

export default connect(mapStateToProps)(FormDespesas);
