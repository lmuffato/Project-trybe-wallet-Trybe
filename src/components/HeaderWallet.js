import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import sumExpensesService from '../services/sumExpensesService';

class HeaderWallet extends React.Component {
  render() {
    const { userEmail, expenses } = this.props;
    return (
      <div>
        <h1 data-testid="email-field">{`Bem-vindo ${userEmail}`}</h1>
        <p data-testid="total-field">
          {
            `Despesa Total: R$ 
          ${expenses.length === 0
        ? '0.00'
        : sumExpensesService(expenses)
      }
          `
          }
        </p>
        <p data-testid="header-currency-field">Cambio: BRL</p>
      </div>
    );
  }
}

HeaderWallet.propTypes = {
  userEmail: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf({}).isRequired,
};

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  total: state.wallet.total,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(HeaderWallet);
