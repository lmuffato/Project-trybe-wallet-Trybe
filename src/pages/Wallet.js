import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import FormWallet from '../components/FormWallet';
import Table from '../components/Table';

class Wallet extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <div className="header">
        <header>
          <span data-testid="email-field">{user.email}</span>
          <span data-testid="total-field">0</span>
          <span data-testid="header-currency-field">BRL</span>
        </header>
        <FormWallet />
        <Table />
      </div>

    );
  }
}

// Source: https://github.com/tryber/sd-010-a-project-trybewallet/tree/nascjoao-project-trybewallet
const mapStateToProps = (state) => ({
  user: {
    email: state.user.email,
  },
});

Wallet.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
  }).isRequired,
};

export default connect(mapStateToProps)(Wallet);
