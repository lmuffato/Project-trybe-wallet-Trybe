import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AddCurrencies from '../components/AddCurrencies';
import { fetchAPI } from '../reducers/wallet';

class Wallet extends React.Component {
  componentDidMount() {
    const { fetchApiThunk } = this.props;
    fetchApiThunk();
  }

  render() {
    const { userEmail, totalExpense } = this.props;
    return (
      <>
        <header className="header-wallet">
          <img src="https://www.abcdacomunicacao.com.br/wp-content/uploads/Trybe_logo-baixa.png" alt="trywallet logo" />
          <div className="user-info">
            <p data-testid="email-field">{ userEmail }</p>
            <p data-testid="total-field">
              { `Despesa Total: $${totalExpense.toFixed(2)}` }
            </p>
            <p data-testid="header-currency-field">BRL</p>
          </div>
        </header>
        <AddCurrencies />
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchApiThunk: () => dispatch(fetchAPI()),
});

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  userExpenses: state.wallet.expenses,
  totalExpense: state.totalValue.totalExpensesValue,
});

Wallet.propTypes = {
  fetchApiThunk: PropTypes.func,
  userEmail: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
