import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      istotal: Boolean,
    };

    this.handleTotal = this.handleTotal.bind(this);
  }

  componentDidMount() {
    this.handleTotal();
  }

  handleTotal() {
    const { totalValue } = this.props;
    if (totalValue === 0) {
      this.setState({
        istotal: true,
      });
    } else {
      this.setState({
        istotal: false,
      });
    }
  }

  render() {
    const { email, totalValue } = this.props;
    const { istotal } = this.state;
    return (
      <header>
        <p data-testid="email-field">
          Email:
          {(email)}
        </p>
        {istotal ? <span data-testid="total-field">{parseFloat(totalValue).toFixed(2)}</span>
          : <span data-testid="total-field">0</span>}
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
