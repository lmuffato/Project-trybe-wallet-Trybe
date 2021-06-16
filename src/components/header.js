import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        <span data-testid="email-field">
          {email}
        </span>
        <span>
          TotalDeGastos
          <input
            data-testid="total-field"
            readOnly
            name="total-expense"
            value="0"
          />
        </span>
        <span
          data-testid="header-currency-field"
        >
          BRL
        </span>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  email: state.user.email });

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Header);
