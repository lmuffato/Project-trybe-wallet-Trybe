import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { user:{ email } } = this.props;
    return (
      <header>
        <p data-testid="email-field">Email:{ email }</p>
        <div>
          Despesa Total:
          <p data-testid="total-field">{ 0 }</p>
          <p data-testid="header-currency-field">BRL</p>
        </div>
      </header>
    )
  }
}

const mapStateToProps = state => {
  const { user } = state;
  return { user };
};

export default connect(mapStateToProps, null)(Header);