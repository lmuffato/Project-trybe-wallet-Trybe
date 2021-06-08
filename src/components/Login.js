import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './login.css';

class Login extends React.Component {
  render() {
    return (
      <div className="login">
        <h3>Login</h3>
        <form className="form-login">
          <input className="inputs" data-testid="email-input" placeholder="Email" />
          <input className="inputs" data-testid="password-input" placeholder="Senha" />
          <Link to="/carteira">
            <button className="button-login" type="button" disabled>Entrar</button>
          </Link>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispath) => ({
  isDisabled: () => dispath(),
  handleEmail: () => dispath(),
});

export default connect(null, mapDispatchToProps)(Login);
