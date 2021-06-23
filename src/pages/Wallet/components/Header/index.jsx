import React from 'react';
import { string, number, shape, bool } from 'prop-types';
import { connect } from 'react-redux';

import styles from './styles.module.css';

class Header extends React.Component {
  render() {
    const { user: { email }, totalExpense, isLoading } = this.props;

    return (
      <header className={ styles.container }>
        <h1>TRYBEWALLET</h1>

        <div>
          <p className={ styles.email } data-testid="email-field">{email}</p>
          <p className={ styles.expenses } data-testid="total-field">
            {isLoading ? 'Loading...' : `Despesa total: R$${totalExpense || '0'}`}
            <span data-testid="header-currency-field"> BRL</span>
          </p>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  isLoading: bool.isRequired,
  totalExpense: number.isRequired,
  user: shape({
    email: string.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  totalExpense: state.wallet.totalExpense,
  isLoading: state.wallet.isLoading,
});

export default connect(mapStateToProps)(Header);
