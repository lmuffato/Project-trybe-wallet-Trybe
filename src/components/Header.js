import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { loginEmail } = this.props;

    return (
      <div>
        <span data-testid="email-field">{`Email: ${loginEmail}`}</span>
        <span data-testid="total-field">Despesa Total: R$ 0.00</span>
        <span data-testid="header-currency-field">BRL</span>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loginEmail: state.user.email,
});

Header.propTypes = {
  loginEmail: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Header);
