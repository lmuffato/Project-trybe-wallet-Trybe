import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Forms from '../components/Forms';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        <header>
          <div data-testid="email-field">
            Email:
            {email}
          </div>
          <div data-testid="total-field">
            Total Despesas: 0
          </div>
          <div data-testid="header-currency-field">
            BRL
          </div>
        </header>
        <Forms />
      </div>);
  }
}
const mapStateToProps = (state) => ({
  email: state.user.email,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Wallet);
