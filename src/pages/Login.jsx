import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { userLogin } from '../actions/userLogin';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isDisabled: false,
    };

    this.validEmail = this.validEmail.bind(this);
    this.validPassword = this.validPassword.bind(this);
    this.checkInput = this.checkInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  validEmail() {
    const { email } = this.state;
    const check = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
    return (check.test(email));
  }

  validPassword() {
    const { password } = this.state;
    const checkPower = /[a-z0-9._%+-]{6}/;
    return (checkPower.test(password));
  }

  checkInput() {
    const { email, password } = this.state;
    const check = (this.validEmail(email) && this.validPassword(password));
    return check;
  }

  handleClick() {
    const { email, password } = this.state;
    const { getUser } = this.props;
    getUser(email, password);
    this.setState({
      isDisabled: true,
    });
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, password, isDisabled } = this.state;
    if (isDisabled) return <Redirect to="/carteira" />;
    return (
      <main>
        <div>
          <label htmlFor="login-email">
            E-mail:
            <input
              type="text"
              name="email"
              data-testid="email-input"
              id="email-input"
              value={ email }
              onChange={ this.handleChange }
            />
          </label>
        </div>
        <div>
          <label htmlFor="login-password">
            Senha:
            <input
              type="text"
              name="password"
              data-testid="password-input"
              id="password-input"
              value={ password }
              onChange={ this.handleChange }
            />
          </label>
        </div>
        <div>
          <button
            type="button"
            onClick={ this.handleClick }
            disabled={ !(this.checkInput()) }
          >
            Entrar
          </button>
        </div>
      </main>
    );
  }
}

Login.propTypes = {
  getUser: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getUser: (email, password) => dispatch(userLogin(email, password)),
});

export default connect(null, mapDispatchToProps)(Login);

// Referências:
// Para validação de email: https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail
// Para validação de email: https://www.horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/
// Para validação de senha: https://stackoverflow.com/questions/53090699/how-to-run-an-alert-on-button-click-react-js
// Para validação de senha: https://pt.stackoverflow.com/questions/373574/regex-para-senha-forte
// Para desabilitar botão: https://stackoverflow.com/questions/41488715/how-to-disable-button-in-react-js
// Sobre setState: https://sentry.io/answers/forget-set-state-is-async/
// Utilizei Redirect porque os testes não passaram com o uso de <Link>
