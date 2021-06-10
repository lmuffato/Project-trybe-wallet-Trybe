import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { email } = this.props;
    // totalValue
    return (
      <div className="HeaderClass">
        <div data-testid="email-field">{ email }</div>
        <div data-testid="total-field">
          Despesa total:
        </div>
        <div data-testid="header-currency-field">BRL</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  // totalValue: state.user.user.totalValue,
});

export default connect(mapStateToProps, null)(Header);

Header.propTypes = {
  email: PropTypes.string,
  // totalValue: PropTypes.number,
}.isRequired;
