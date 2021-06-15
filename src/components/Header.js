import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { userData } = this.props;
    return (
      <header>
        <h4>Email: </h4>
        <p data-testid="email-field">{userData}</p>
        <h4>Total de despesas: R$</h4>
        <p data-testid="total-field">0</p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  userData: state.user.email,
});

Header.propTypes = {
  userData: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Header);
