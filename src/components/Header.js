import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <section>
        <div>
          <span> Email: </span>
          <span data-testid="email-field">
            { email }
          </span>
        </div>

        <div>
          <span> Despesas totais: </span>
          <span data-testid="total-field"> 0 </span>
          <span data-testid="header-currency-field"> BRL </span>
        </div>
      </section>
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
