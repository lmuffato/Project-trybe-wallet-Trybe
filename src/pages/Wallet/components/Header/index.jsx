import React from 'react';
import { string, shape } from 'prop-types';
import { connect } from 'react-redux';

import { Container, Email, Expenses } from './styles';

class Header extends React.Component {
  render() {
    const { user: { email } } = this.props;

    return (
      <Container>
        <h1>TRYBEWALLET</h1>

        <div>
          <Email data-testid="email-field">{email}</Email>
          <Expenses data-testid="total-field">
            Despesa total: R$0
            <span data-testid="header-currency-field"> BRL</span>
          </Expenses>
        </div>
      </Container>
    );
  }
}

Header.propTypes = {
  user: shape({
    email: string.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(Header);
