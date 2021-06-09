import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrencies } from '../actions';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <main>
        <header>
          <h1>TrybeWallet</h1>
          <section>
            <div>
              Email:
              <span data-testid="email-field">{ email }</span>
            </div>
            <div>
              Despesa total:
              <span data-testid="header-currency-field">BRL</span>
              <span data-testid="total-field">0</span>
            </div>
          </section>
        </header>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

const mapDispachToProps = (dispach) => ({
  updateCurrencies: () => dispach(fetchCurrencies()),
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispachToProps)(Wallet);
