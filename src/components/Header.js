import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { userEmail } = this.props;
    return (
      <div>
        <span data-testid="email-field">{`${userEmail}`}</span>
        <span data-testid="total-field">0</span>
        <span data-testid="header-currency-field">BRL</span>
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

export default connect(mapStateToProps, null)(Header);
