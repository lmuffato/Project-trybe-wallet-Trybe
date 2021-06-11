import React from 'react';
import './Header.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { user, total } = this.props;
    return (
      <header>
        <div className="logo">
          LOGO
        </div>
        <div className="email">
          <h4>Email: </h4>
          <p data-testid="email-field">{user}</p>
        </div>
        <div className="total">
          <h4>Total de despesas: R$</h4>
          <h4 data-testid="total-field">{total}</h4>
          <p data-testid="header-currency-field">BRL</p>
        </div>

      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.email,
  total: state.wallet.totalExpenses,
});

Header.propTypes = {
  total: PropTypes.number.isRequired,
  user: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
