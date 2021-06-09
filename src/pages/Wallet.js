import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <main>
        <header>
          <h1>TrybeWallet</h1>
          <section>
            <label htmlFor="email">
              Email:
              <span name="email" data-testid="email-field">{ email }</span>
            </label>
            <label htmlFor="total-expense">
              Despesa total:
              <span>BRL</span>
              <span name="total-expense" data-testid="total-field">0</span>
            </label>

          </section>
        </header>
        
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.login.email,
});

const mapDispachToProps = (dispach) => ({
  alguma: (info) => dispach(wallet(info)),
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispachToProps)(Wallet);
