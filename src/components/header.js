import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
    };
  }

  render() {
    const { total } = this.state;
    const { theEmail } = this.props;
    return (
      <>
        <h5 data-testid="email-field">
          { theEmail }
        </h5>
        <h5 data-testid="total-field">
          { total }
        </h5>
        <h5 data-testid="header-currency-field"> BRL </h5>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  theEmail: state.user.email,
});

Header.propTypes = {
  theEmail: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
