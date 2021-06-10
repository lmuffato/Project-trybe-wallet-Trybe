import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    const { email } = this.props;

    this.state = {
      userEmail: email,
      totalField: 0,
      cambio: 'BRL',
    };
  }

  render() {
    const { totalField, userEmail, cambio } = this.state;
    return (
      <header>
        <p data-testid="email-field">
          Usuario:
          {' '}
          {userEmail}
        </p>
        <p data-testid="total-field">
          Despesar Totais: R$
          {' '}
          {totalField}
        </p>
        <p data-testid="header-currency-field">{cambio}</p>
      </header>
    );
  }
}

const mapStateToPros = (state) => ({
  email: state.user.email,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToPros, null)(Wallet);
