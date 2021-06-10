import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { user: { email } } = this.props;
    return (
      <>
        <h4 data-testid="email-field">
          E-mail:
          { email }
        </h4>
        <p>
          Despesa Total:
          <span data-testid="total-field">0</span>
          <span data-testid="header-currency-field">BRL</span>
        </p>
      </>
    );
  }
}

Header.propTypes = {
  user: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, null)(Header);
