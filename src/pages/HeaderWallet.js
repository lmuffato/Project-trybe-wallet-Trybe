import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class HeaderWallet extends React.Component {
  render() {
    const { userEmail } = this.props;
    const total = 0;
    return (
      <div>
        <h1 data-testid="email-field">{`Bem-vindo ${userEmail}`}</h1>
        <p data-testid="total-field">{` Despesa Total: R$ ${total}`}</p>
        <p data-testid="header-currency-field">BRL</p>
      </div>
    );
  }
}

HeaderWallet.propTypes = {
  userEmail: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
});
export default connect(mapStateToProps, null)(HeaderWallet);
