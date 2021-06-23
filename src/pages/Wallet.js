import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import FormularioDespesa from '../Component/FormularioDespesa';

class Wallet extends React.Component {
  totalDespesas() {
    const { subtotal } = this.props;
    let total = 0;
    subtotal.forEach((expense) => {
      // expense.value = state.wallet.expenses(id).value
      // expense.exchangeRates = state.wallet.expenses(id).exchangeRate
      // [expense.currency] = continuação acima => sigla da moeda -- Ex: USD
      // .ask =  Chave usada na cotação atual informada pela API
      total += expense.value * expense.exchangeRates[expense.currency].ask;
    });
    return total;
  }

  render() {
    const { emailCliente } = this.props;
    return (
      <>
        <header className="header">
          <div className="div-header">
            <p className="p-header" data-testid="email-field">
              E-mail:
              <span className="alinhamentoCampo">{ emailCliente }</span>
            </p>
            <p className="p-header" data-testid="total-field">
              Despesa Total:
              <span className="alinhamentoCampo">{this.totalDespesas()}</span>
            </p>
            <p className="coin-header" data-testid="header-currency-field">BRL</p>
          </div>
        </header>
        <div>
          <FormularioDespesa />
        </div>
      </>
    );
  }
}

// Para entender melhor os códigos abaixo, consultar a aula do dia 16.2
const mapStateToProps = (state) => ({
  emailCliente: state.user.email,
  subtotal: state.wallet.expenses,
});

Wallet.propTypes = { emailCliente: PropTypes.string }.isRequired;

export default connect(mapStateToProps, null)(Wallet);
