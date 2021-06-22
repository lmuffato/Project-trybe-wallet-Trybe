import React from 'react';
import { string, shape } from 'prop-types';
import { connect } from 'react-redux';

import styles from './styles.module.css';

class Header extends React.Component {
  render() {
    const { user: { email } } = this.props;

    return (
      <header className={ styles.container }>
        <h1>TRYBEWALLET</h1>

        <div>
          <p className={ styles.email } data-testid="email-field">{email}</p>
          <p className={ styles.expenses } data-testid="total-field">
            Despesa total: R$0
            <span data-testid="header-currency-field"> BRL</span>
          </p>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  user: shape({
    email: string.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(Header);
