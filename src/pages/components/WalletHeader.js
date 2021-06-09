import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import WalletExpenses from './WalletExpenses';

class WalletHeader extends Component {
  render() {
    const { user } = this.props;
    return (
      <header>
        <h3 data-testid="email-field">{ user }</h3>
        <WalletExpenses />
      </header>
    );
  }
}

WalletHeader.propTypes = {
  user: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => ({
  user: state.user.email,
});

export default connect(mapStateToProps, null)(WalletHeader);
