import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { coinThunk } from '../actions';

class Form extends Component {
  componentDidMount() {
    const { thunk } = this.props;
    thunk();
  }

  render() {
    const { currecies } = this.props;
    return (
      <form>
        <label htmlFor="valor">
          valor
          <input aria-label="valor" type="number" name="valor" />
        </label>
        <label htmlFor="desc">
          Descrição
          <input aria-label="descrição" type="text" name="desc" />
        </label>
        <label htmlFor="tax">
          Moeda
          <select aria-label="Moeda" name="tax">
            {currecies.map((currency) => (
              <option value={ currency[0] } key={ currency[0] }>{currency[0]}</option>
            ))}
          </select>

        </label>
        <label htmlFor="pag">
          Método de pagamento
          <select aria-label="Método de pagamento" name="pag">
            <option value="dinheiro">Dinheiro</option>
            <option value="cartão_credito">Cartão de crédito</option>
            <option value="cartão_debito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select aria-label="Tag" name="tag">
            <option value="alimentacao">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saude">Saúde</option>
          </select>
        </label>

      </form>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  thunk: () => dispatch(coinThunk()),
});

const mapStateToProps = (state) => ({
  currecies: state.wallet.currencies,
});

Form.propTypes = {
  thunk: PropTypes.func,
  currecies: PropTypes.array,

}.isRequired;
export default connect(mapStateToProps, mapDispatchToProps)(Form);
