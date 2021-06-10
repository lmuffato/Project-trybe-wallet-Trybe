// lógica de implementação da relação da validação do button com os boleanos dos inputs e auxílio em detalhes do CSS realizada com o auxílio do poderosíssimo João Nascimento, Turma 10//
import React from 'react';
import './Login.css';
import { withRouter } from 'react-router-dom';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { user } from '../actions/index';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      disabledButton: true,
    };

    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  /* https://pt-br.reactjs.org/docs/react-component.html#componentdidupdate */

  componentDidUpdate(prevProps, prevState) {
    const { email, password } = this.state;
    if (prevState.email !== email || prevState.password !== password) {
      this.validInputs();
    }
  }

  handleClick(path) { // *https://stackoverflow.com/questions/44877821/how-to-navigate-on-path-by-button-click-in-react-router-v4 e  auxílio do Perycles da turma 10 A*//
    const { props: { history, saveEmail }, state: { email } } = this;
    saveEmail(email);
    history.push(path);
  }

  validInputs() {
    const minPasswordLength = 5;
    const { email, password } = this.state;
    const emailPattern = /\b[\w.-]+@[\w.-]+\.\w{2,4}\b/gi; // *https://regexr.com/2ri2c *//
    const validPassword = password.length > minPasswordLength;
    const validEmail = email.match(emailPattern);
    this.setState({ disabledButton: !(validEmail && validPassword) });
    // if (validEmail && validPassword) {
    //   this.setState({ disabledButton: false });
    // } else {
    //   this.setState({ disabledButton: true });
    // }
    // transformando a linha 32 até 36 em uma única linha na 31
  }

  handleChangeEmail({ target: { value } }) {
    this.setState({ email: value });
  }

  render() {
    const { state: { email, password, disabledButton } } = this;
    return (
      <div className="login-box">
        <form>
          <h1>Trybe Wallet</h1>
          <h3>Login</h3>
          <div className="user-box">
            <input
              type="email"
              value={ email }
              onChange={ this.handleChangeEmail }
              placeholder="E-mail"
              data-testid="email-input"
            />
          </div>
          <div className="user-box">
            <input
              type="password"
              value={ password }
              onChange={ (event) => this.setState({ password: event.target.value }) }
              placeholder="Senha"
              data-testid="password-input"
            />
          </div>
          <button
            onClick={ () => this.handleClick('/carteira') }
            disabled={ disabledButton }
            type="button"
            className="btn"
          >
            {!disabledButton && (
              <>
                <span />
                <span />
                <span />
                <span />
              </>
            )}
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveEmail: (email) => dispatch(user(email)),
});

Login.propTypes = {
  history: propTypes.object,
}.isRequired;

export default connect(null, mapDispatchToProps)(withRouter(Login));
