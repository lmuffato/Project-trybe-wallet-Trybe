import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Referência para resolver req 5, {referente ao initialValue} a partir do trabalho do Anderson Silva: https://github.com/tryber/sd-010-a-project-trybewallet/pull/75/files
class Header extends React.Component {
  render() {
    const { email, totalValue } = this.props;
    return (
      <div className="HeaderClass">
        <div data-testid="email-field">{ email }</div>
        <div data-testid="total-field">
          {totalValue}
        </div>
        <div data-testid="header-currency-field">BRL</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  totalValue: state.wallet.totalValue,
});

export default connect(mapStateToProps, null)(Header);

Header.propTypes = {
  email: PropTypes.string,
  // totalValue: PropTypes.number,
}.isRequired;
