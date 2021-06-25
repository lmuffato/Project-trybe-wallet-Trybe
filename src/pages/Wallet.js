import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Forms from '../components/Forms';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {

    };
    this.header = this.header.bind(this);
  }

  header() {
    const { email } = this.props;
    return (
      <header>
        <p data-testid="email-field">{email}</p>
        <p data-testid="total-field">{total}</p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }

  render() {
    return (
      <div>
        { this.header() }
        <Forms />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  currency: state.wallet.expenses,
  expenses: state.wallet.currencies,
});

Wallet.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Wallet);
