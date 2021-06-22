import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      totalExpenses: 0,
    };
  }

  render() {
    const { user } = this.props;
    console.log(user);
    const { totalExpenses } = this.state;
    return (
      <section>
        <div htmlFor="img">
          <img
            name="img"
            width="50px"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpvs4fUyOMdaFmPeLUKmHImikYC47QxiVcAg&usqp=CAU"
            alt="logo_carteira"
          />
        </div>
        <p data-testid="email-field">{ user }</p>
        <p data-testid="total-field">Despesas totais:</p>
        <p>{ totalExpenses }</p>
        <p data-testid="header-currency-field">BRL</p>
      </section>
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
