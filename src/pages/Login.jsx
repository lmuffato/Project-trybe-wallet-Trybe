import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import Header from './Header';
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

  // validação de email implementada a partir desse link https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail
  validaEmail(email) {
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.com ?$/i;
    return emailRegex.test(String(email).toLowerCase());
  }

  // validação de senha implementada baseada no code review do Renzo Sevillha
  validaSenha(password) {
    const minLengthPassword = 6;
    const verdadeiro = true;
    return password.length >= minLengthPassword ? verdadeiro : false;
    // return senhaOk;
  }

  // validação de senha implementada baseada no code review do Renzo Sevillha
  checkLogin() {
    const { email, password } = this.state;
    const check = this.validaEmail(email) && this.validaSenha(password);
    return check;
  }

  form() {
    const { state } = this;
    const { userDispatch } = this.props;
    return (
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
          onClick={ () => userDispatch({ state }) }
          disabled={ !this.checkLogin() }
        >
          {/* atributo disabled implementado com base na seguinte documentação https://www.w3schools.com/tags/att_button_disabled.asp */}
          <button
            type="button"
            disabled={ !this.checkLogin() }
            className="btn-login nohover"
          >
            Entrar
          </button>
        </Link>

      </form>
    );
  }

  render() {
    return (
      <div>
        <Header />
        <div className="login-page">
          <div className="form">
            <img className="img-form" src="https://i.pinimg.com/originals/c1/d1/18/c1d1189465512ee563dddd5010d7ec95.gif" alt="walletMeme" />
            <h2>Trybe Wallet</h2>
            {this.form()}
          </div>
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
  userDispatch: (payload) => dispatch(loginAction(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
