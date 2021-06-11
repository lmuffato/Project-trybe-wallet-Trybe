import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  render() {
    const { emailGot } = this.props;
    console.log(emailGot);
    return (
      <header>
        <span data-testid="email-field">
          Olá,
          { emailGot }
        </span>
        <span data-testid="total-field">Despesa Total: R$ 0 </span>
        <span data-testid="header-currency-field">BRL</span>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  emailGot: state.user.email,
});

Wallet.propTypes = {
  emailGot: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, null)(Wallet);
