import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <header>
        <p data-testid="header-currency-field">Câmbio: BRL</p>
        <p data-testid="total-field">Valor total: 0</p>
        <h6 data-testid="email-field">{user}</h6>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.email,
});

Wallet.propTypes = {
  user: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps, null)(Wallet);
