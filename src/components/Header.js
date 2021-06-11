import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Header.css';

class Header extends Component {
  render() {
    const { user: { email } } = this.props;
    return (
      <header className="Header">
        <p data-testid="email-field">
          Email:
          { email }
        </p>
        <div className="Header-Currency">
          <p>Despesa Total: </p>
          <p data-testid="total-field">{ 0 }</p>
          <p data-testid="header-currency-field">BRL</p>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  const { user } = state;
  return { user };
};

Header.propTypes = {
  user: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, null)(Header);
