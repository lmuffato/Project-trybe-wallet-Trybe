import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getApi from '../services/api';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalExpenses: 0,
    };

    this.getInformation = this.getInformation.bind(this);
  }

  async getInformation() {
    const api = await getApi();
    console.log(api);
    return api;
  }

  render() {
    const { user } = this.props;
    console.log(user);
    const { totalExpenses } = this.state;
    this.getInformation();
    return (
      <header>
        <h1>header</h1>
        <p data-testid="email-field">{ user }</p>
        <p data-testid="total-field">Despesas totais:</p>
        <p>{ totalExpenses }</p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.email,
});

Header.propTypes = {
  user: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
