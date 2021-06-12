import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends Component {
  render() {
    const { props: { emailDaPessoa } } = this;
    return (
      <div>
        <header data-testid="email-field">{emailDaPessoa}</header>
        <span data-testid="total-field">{0}</span>
        <span data-testid="header-currency-field">BRL</span>
      </div>
    );
  }
}

Wallet.propTypes = {
  emailDaPessoa: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  emailDaPessoa: state.user.email,
});

export default connect(mapStateToProps, null)(Wallet);
