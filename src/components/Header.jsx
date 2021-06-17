import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  constructor(props) {
    super(props);

    this.handleTotal = this.handleTotal.bind(this);
  }

  handleTotal() {
    const { totalValue } = this.props;
    if (totalValue === 0) {
      return true;
    }
    return false;
  }

  render() {
    const { email, totalValue } = this.props;
    console.log(totalValue)
    const total = parseFloat(totalValue).toFixed(2);
    return (
      <header>
        <p data-testid="email-field">
          Email:
          {(email)}
        </p>
        <p>
          Total:
          {this.handleTotal ? <p data-testid="total-field">0</p> : total}
        </p>
        <p data-testid="header-currency-field">
          Taxa:BRL
        </p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  totalValue: state.wallet.total,
});

Header.propTypes = {
  email: PropTypes.string,
  totalValue: PropTypes.number,

}.isRequired;
export default connect(mapStateToProps)(Header);
