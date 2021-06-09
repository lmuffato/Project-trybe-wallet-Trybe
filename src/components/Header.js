import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      totalValue: 0,
    };
  }

  render() {
    const { totalValue } = this.state;
    const { email } = this.props;

    return (
      <div>
        <span data-testid="email-field">{ email }</span>
        <span data-testid="total-field">{ totalValue }</span>
        <span data-testid="header-currency-field">BRL</span>
      </div>
    );
  }
}

// Ref. validação props: https://stackoverflow.com/questions/64012257/proptype-name-is-not-required-but-has-no-corresponding-defaultprops-declarati
Header.defaultProps = {
  email: null,
};

Header.propTypes = {
  email: PropTypes.string,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps, null)(Header);
