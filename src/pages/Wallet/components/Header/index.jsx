import React from 'react';
import { string, arrayOf, object, shape, bool } from 'prop-types';
import { connect } from 'react-redux';

import totalExpenses from '../../../../helpers/totalExpenses';

import styles from './styles.module.css';

class Header extends React.Component {
  render() {
    const { user: { email }, expenses, isLoading } = this.props;
    console.log(expenses);

    return (
      <header className={ styles.container }>
        <h1>TRYBEWALLET</h1>

        <div>
          <p className={ styles.email } data-testid="email-field">{email}</p>
          <p className={ styles.expenses } data-testid="total-field">
            {isLoading ? 'Loading...' : `Despesa total: R$${totalExpenses(expenses)}`}
            <span data-testid="header-currency-field"> BRL</span>
          </p>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  isLoading: bool.isRequired,
  expenses: arrayOf(object.isRequired).isRequired,
  user: shape({
    email: string.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  isLoading: state.wallet.isLoading,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
