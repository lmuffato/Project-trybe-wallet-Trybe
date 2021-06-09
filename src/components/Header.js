import React from 'react';
import './Header.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { user } = this.props;
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
          <p data-testid="total-field">0</p>
          <p data-testid="header-currency-field">BRL</p>
        </div>

      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.email,
});

Header.propTypes = {
  user: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Header);
