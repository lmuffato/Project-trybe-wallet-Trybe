import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email, total } = this.props;
    return (
      <header>
        <h5 data-testid="email-field" id="email-field=">
          {`E-mail: ${email}` }
        </h5>
        <h5 data-testid="total-field" id="total-field">
          {`Despesa Total: R$ ${total || '0'}`}
        </h5>
        <h5 data-testid="header-currency-field" id="header-currency-field">BRL</h5>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
};

const mapStateToProps = ({ user: { email }, wallet: { total } }) => ({
  email,
  total,
});

export default connect(mapStateToProps)(Header);
