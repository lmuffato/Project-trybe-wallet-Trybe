import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  render() {
    const { emailGotten } = this.props;
    return (
      <header>
        <p data-testid="email-field">
          { emailGotten }
        </p>
        <p data-testid="total-field">0</p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  emailGotten: state.user.email,
});

Wallet.propTypes = {
  emailGotten: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Wallet);
