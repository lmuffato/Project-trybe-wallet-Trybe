import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      expenseMount: 0,
      coin: 'BRL',
    };
  }

  render() {
    const { email } = this.props;
    const { expenseMount, coin } = this.state;
    return (
      <div>
        <h4 data-testid="email-field">{ email }</h4>
        <h4 data-testid="total-field">{ expenseMount }</h4>
        <h4 data-testid="header-currency-field">{ coin }</h4>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Wallet);
