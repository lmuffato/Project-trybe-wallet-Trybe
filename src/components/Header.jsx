import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <header className="wallet-header">
        <h6 data-testid="email-field">{user}</h6>
        <p data-testid="header-currency-field">Câmbio: BRL</p>
        <p data-testid="total-field">Valor total: 0</p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.email,
});

Header.propTypes = {
  user: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps, null)(Header);
