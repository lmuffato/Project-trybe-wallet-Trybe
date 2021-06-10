import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class FormDespesas extends React.Component {
  constructor() {
    super();
    this.selectMoedas = this.selectMoedas.bind(this);
  }

  selectMoedas() {
    const { currencies } = this.props;
    const combo = (
      <select id="moeda">
        {currencies.map((currencie) => (
          <option key={ currencie } value={ currencie }>{currencie}</option>
        ))}
      </select>
    );

    return combo;
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <label htmlFor="valor">
          Valor
          <input type="number" id="valor" />
        </label>
        <label htmlFor="descricaoDoValor">
          Descrição
          <input type="text" id="descricaoDoValor" />
        </label>
        <label htmlFor="moeda">
          Moeda
          { this.selectMoedas() }
        </label>
        <label htmlFor="metodoPagamento">
          Método de pagamento
          <select id="metodoPagamento">
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="categoria">
          Tag
          <select id="categoria">
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">saúde</option>
          </select>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

FormDespesas.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, null)(FormDespesas);
