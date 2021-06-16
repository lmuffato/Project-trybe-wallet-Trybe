import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

class Header extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <div>
        <header>
          <p data-testid="email-field">{user.email}</p>
          <p data-testid="total-field">
            0
          </p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: {
    email: state.user.email,
  },
});

export default connect(mapStateToProps)(Header);
Header.propTypes = {
  user: PropTypes.string,
  email: PropTypes.string,
}.isRiquered;
