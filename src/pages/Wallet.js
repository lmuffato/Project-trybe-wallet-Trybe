import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  render() {
    const { email, total = 0 } = this.props;
    return (
      <div>
        <span>Olá, </span>
        <span data-testid="email-field">
          { email }
        </span>
        !
        <div>
          <span>Valor total: </span>
          <span data-testid="total-field">{ total }</span>
          <span data-testid="header-currency-field"> BRL</span>
        </div>
      </div>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string,
  total: PropTypes.number,
}.isRequired;

const mapStateToProps = (state) => ({
  email: state.user.email,
  total: state.wallet.total,
});

export default connect(mapStateToProps)(Wallet);
