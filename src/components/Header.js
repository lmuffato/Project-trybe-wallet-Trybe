import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { user, currencies1 } = this.props;
    return (
      <section>
        <img
          name="img"
          width="50px"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpvs4fUyOMdaFmPeLUKmHImikYC47QxiVcAg&usqp=CAU"
          alt="logo_carteira"
        />
        <p data-testid="email-field">{ user }</p>
        <p data-testid="total-field">Despesas totais:</p>
        <p>{ currencies1 }</p>
        <p data-testid="header-currency-field">BRL</p>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.email,
  currencies1: state.wallet.currencies,
});

Header.propTypes = {
  user: PropTypes.string.isRequired,
  currencies1: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Header);
