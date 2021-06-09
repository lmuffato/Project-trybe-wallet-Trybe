import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        Email:
        <span data-testid="email-field">{ email }</span>
        <p>total de gastos:</p>
        <input
          type="text"
          data-testid="total-field"
          role="combobox"
          aria-controls="0"
          aria-expanded="false"
        />
        <p data-testid="header-currency-field">BRL</p>
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.object,
}.isrequired;

const mapStateToPros = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToPros, null)(Header);
