import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      spends: 0,
    };
  }

  render() {
    const { spends } = this.state;
    const { email } = this.props;
    return (
      <header>
        <div>
          <p> Usuário:</p>
          <p data-testid="email-field">
            { email }
          </p>
          <p data-testid="total-field">
            { spends }
          </p>
          <p data-testid="header-currency-field"> BRL </p>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Header);
