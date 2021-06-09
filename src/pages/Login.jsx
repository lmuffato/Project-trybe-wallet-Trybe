import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import { user as loginAction } from '../actions/index';
import './Login.css';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };
  }

  validaEmail(email) {
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.com ?$/i;
    return emailRegex.test(String(email).toLowerCase());
  }

  validaSenha(password) {
    const minLengthPassword = 6;
    const verdadeiro = true;
    return password.length >= minLengthPassword ? verdadeiro : false;
    // return senhaOk;
  }

  checkLogin() {
    const { email, password } = this.state;
    const check = this.validaEmail(email) && this.validaSenha(password);
    return check;
  }

  render() {
    const { email, password } = this.state;
    const { user } = this.props;
    return (
      <div className="login-page">
        <div className="form">
          <img src="https://media.tenor.com/images/3ce11c29678815f9279e7e94dc808f2a/tenor.gif" width="150px" alt="walletMeme" />
          <h1>Trybe Wallet</h1>
          <form className="login-form">
            <input
              onChange={ (e) => this.setState({ email: e.target.value }) }
              type="text"
              placeholder="email"
              data-testid="email-input"
            />
            <input
              onChange={ (e) => this.setState({ password: e.target.value }) }
              type="password"
              placeholder="senha"
              data-testid="password-input"
            />
            <Link
              to="/carteira"
              onClick={ () => user({ email, password }) }
              disabled={ !this.checkLogin() }
            >
              <button
                type="button"
                disabled={ !this.checkLogin() }
                className="btn-login nohover"
              >
                Entrar
              </button>
            </Link>

          </form>
        </div>
      </div>
    );
  }
}

Login.propTypes = ({
  user: func,
}).isRequired;

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  user: (payload) => dispatch(loginAction(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
