import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { user, totalExpenses } = this.props;
    return (
      <header>
        <div data-testid="email-field">
          Email:
          { user }
        </div>
        <div>
          Despesa Total: R$
          <span data-testid="total-field">
            { totalExpenses }
          </span>
        </div>
        <div data-testid="header-currency-field">
          BRL
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Header.propTypes = {
  user: PropTypes.string.isRequired,
  totalExpenses: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Header);
