import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <div>
        <h1>Wallet</h1>
        <p data-testid="email-field">{ user }</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.email,
});

Header.propTypes = {
  user: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Header);
