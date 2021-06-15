import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrency } from '../actions';

class Forms extends React.Component {
  componentDidMount() {
    const { saveCurrency } = this.props;
    saveCurrency();
  }

  render() {
    const { currencies } = this.props;
    // console.log(currencies);
    const listKeys = Object.keys(currencies).filter((currency) => currency !== 'USDT');
    // constante monta a lista de com o resultado das chaves da API, tirando a chave "usdt"
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input type="text" name="value" id="value" />
        </label>

        <label htmlFor="description">
          Descrição:
          <input type="text" name="description" id="description" />
        </label>

        <label htmlFor="currency">
          Moeda:
          <select type="text" id="currency" name="currency">
            {listKeys.map((key) => <option key={ key }>{ key }</option>)}
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento:
          <select type="text" id="payment" name="payment">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="tag">
          tag:
          <select type="text" id="tag" name="tag">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>

      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveCurrency: () => dispatch(fetchCurrency()),
});
const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

Forms.propTypes = {
  saveCurrency: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Forms);
