import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { coinsThunk } from '../actions/index';

class Form extends React.Component {
  componentDidMount() {
    const { coins } = this.props;
    coins();
  }

  render() {
    const { currencies } = this.props;
    return (
      <div>
        <form>
          <label htmlFor="valor">
            Valor
            <input id="valor" type="number" name="valor" />
          </label>
          <label htmlFor="describle">
            Descrição
            <input id="describle" type="text" name="describle" />
          </label>
          <label htmlFor="moeda">
            Moeda
            <select id="moeda" name="moeda">
              {!currencies
                ? <option value="BRL">BRL</option>
                : currencies.map((currency) => (
                  <option key={ currency } value={ currency }>{ currency }</option>
                ))}
            </select>
          </label>
          <label htmlFor="metodo">
            Método de pagamento
            <select id="metodo" name="metodo">
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select id="tag" name="tag">
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  coins: () => dispatch(coinsThunk()),
});

Form.propTypes = {
  getCoins: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Form);
