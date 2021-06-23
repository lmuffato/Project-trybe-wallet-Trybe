import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import FormularioDespesa from '../Component/FormularioDespesa';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      despesa: 0,
    };
  }

  render() {
    const { emailCliente } = this.props;
    const { despesa } = this.state;
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
              <span className="alinhamentoCampo">{ despesa }</span>
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
});

Wallet.propTypes = { emailCliente: PropTypes.string }.isRequired;

export default connect(mapStateToProps, null)(Wallet);
