import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class HeaderWallet extends React.Component {
  render() {
    const { userEmail, total } = this.props;
    return (
      <div>
        <h1 data-testid="email-field">{`Bem-vindo ${userEmail}`}</h1>
        <p data-testid="total-field">{` Despesa Total: R$ ${total || 0}`}</p>
        <p data-testid="header-currency-field">Cambio: BRL</p>
      </div>
    );
  }
}

HeaderWallet.propTypes = {
  userEmail: PropTypes.string.isRequired,
  total: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  total: state.wallet.total,
});

export default connect(mapStateToProps, null)(HeaderWallet);
