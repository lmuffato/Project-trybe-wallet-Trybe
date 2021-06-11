import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { myCurrencies } from '../actions';

class MyForm extends React.Component {
  constructor() {
    super();

    this.renderInput = this.renderInput.bind(this);
    this.renderMetodo = this.renderMetodo.bind(this);
    this.renderCategoria = this.renderCategoria.bind(this);
  }

  componentDidMount() {
    const { moeda } = this.props;
    moeda();
  }

  renderInput() {
    const { ModCambio } = this.props;
    return (
      <>
        <label htmlFor="valor">
          valor
          <input type="text" id="valor" />
        </label>
        <label htmlFor="Descrição">
          Descrição
          <input type="text" id="Descrição" />
        </label>
        <label htmlFor="Moeda">
          Moeda
          <select id="Moeda">
            {
              ModCambio.map((type, index) => <option key={ index }>{type}</option>)
            }
          </select>
        </label>
      </>
    );
  }

  renderMetodo() {
    return (
      <label htmlFor="Mtdpagamento">
        Método de pagamento
        <select id="Mtdpagamento">
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }

  renderCategoria() {
    return (
      <label htmlFor="categoria">
        Tag
        <select id="categoria">
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }

  render() {
    return (
      <form>
        { this.renderInput() }
        { this.renderMetodo() }
        { this.renderCategoria() }
      </form>
    );
  }
}

const mapStateToPros = (state) => ({
  ModCambio: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  moeda: () => dispatch(myCurrencies()),
});

MyForm.propTypes = {
  moeda: PropTypes.func,
}.isRequired;

export default connect(mapStateToPros, mapDispatchToProps)(MyForm);
