import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FormsToWallet from '../Components/FormsToWallet';
import Table from '../Components/Table';

class Wallet extends React.Component {
  render() {
    const { total, email } = this.props;
    return (
      <div>
        <header>
          <p data-testid="email-field">{ email }</p>
          <p data-testid="total-field">{ total }</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
        <FormsToWallet />
        <Table />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  total: state.wallet.total,
  email: state.user.email,
});

Wallet.propTypes = {
  total: PropTypes.number,
  email: PropTypes.string.isRequired,
};
Wallet.defaultProps = {
  total: 0,
};
export default connect(mapStateToProps, null)(Wallet);
