import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  render() {
    const { user:{ email }} = this.props;
    return (
      <div>
        <header>
          <h1 data-testid="email-field">{email}</h1>
          <h1 data-testid="total-field">0</h1>
          <h1 data-testid="header-currency-field">BRL</h1>
        </header>
      </div>);
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

Wallet.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
  }).isRequired,
};

export default connect(mapStateToProps, null)(Wallet);
