import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  constructor(props) {
    super(props);
    // const { expenses } = this.props;

    const total = this.calculateTotal(0);

    this.state = ({
      total,
      currency: 'BRL',
    });

    this.calculateTotal = this.calculateTotal.bind(this);
  }

  calculateTotal(expenses = 0) {
    return expenses;
  }

  render() {
    const { email } = this.props;
    const { total, currency } = this.state;

    return (
      <div>
        <h3>Bruno`s Wallet</h3>
        <div>
          <h4 data-testid="email-field">{ `Bem vindo ${email}` }</h4>
          <h4 data-testid="total-field">{ `Valor: ${total}`}</h4>
          <h4 data-testid="header-currency-field">{`${currency}`}</h4>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  // expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  // expenses: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Header);

// export default Header;
