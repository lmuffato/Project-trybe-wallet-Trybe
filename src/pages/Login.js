import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getEmail } from '../actions/index';

class Login extends React.Component {
  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="email"
          data-testid="email-input"
          pattern="@"
        />
        <input
          type="password"
          placeholder="senha"
          data-testid="password-input"
          minLength="6"
        />
        <button type="submit">
          <Link to="/carteira">Entrar</Link>
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getEmail: (email) => dispatch(
    getEmail(email),
  ),
});

export default connect(null, mapDispatchToProps)(Login);
