import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { currencies } from '../actions';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      accuValue: 0,
    };

    this.firstValuation = this.firstValuation.bind(this);
  }

  componentDidMount() {
    this.firstValuation();
  }

  firstValuation() {
    const { currencies1, toCurrency } = this.props;
    const { accuValue } = this.state;
    if (currencies1.length === 0) {
      toCurrency(accuValue);
      return accuValue;
    }
    return currencies1;
  }

  render() {
    const { user } = this.props;
    return (
      <section className="headerMain">
        <img
          name="img"
          width="50px"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpvs4fUyOMdaFmPeLUKmHImikYC47QxiVcAg&usqp=CAU"
          alt="logo_carteira"
        />
        <div className="headerSec">
          <p data-testid="email-field">{ user }</p>
          <p>Despesas totais:</p>
          <p data-testid="total-field">{ this.firstValuation() }</p>
          <p data-testid="header-currency-field">BRL</p>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.email,
  currencies1: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  toCurrency: (payload) => dispatch(currencies(payload)),
});

Header.propTypes = {
  user: PropTypes.string.isRequired,
  currencies1: PropTypes.func.isRequired,
  toCurrency: PropTypes.oneOf(PropTypes.func, PropTypes.array).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
