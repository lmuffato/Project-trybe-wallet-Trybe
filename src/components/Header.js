import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { sendEmail } = this.props;
    return (
      <div>
        <p data-testid="email-field">
          { sendEmail }
        </p>
        <p data-testid="total-field">Valor:0</p>
        <p data-testid="header-currency-field">Câmbio utilizado:BRL</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  sendEmail: state.user.email,
});

Header.propTypes = {
  sendEmail: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Header);
