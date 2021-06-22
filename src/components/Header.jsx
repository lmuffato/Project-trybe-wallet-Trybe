import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      totalDispense: 0,
    };
  }

  render() {
    const { email } = this.props;
    const { totalDispense } = this.state;
    return (
      <header className="header-container">
        <h1 className="header-logo">TrybeWallet</h1>
        <div className="header-right">
          <div data-testid="email-field" className="email">
            Email:
            { ` ${email}` }
          </div>
          <div data-testid="total-field" className="dispense">
            Despesa Total
            { ` ${totalDispense}` }
          </div>
          <div data-testid="header-currency-field" className="currency">
            BRL
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Header.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps, null)(Header);
