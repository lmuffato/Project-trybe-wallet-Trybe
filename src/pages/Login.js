import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { saveUser } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      redirect: false,
    };
    this.validateButton = this.validateButton.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.action = this.action.bind(this);
  }

  componentDidUpdate(_prevProps, prevState) {
    const { valueButton } = this.state;
    if (prevState.valueButton !== valueButton) return this.validateButton;
  }

  handleChange(field, value) {
    this.setState({ [field]: value });
  }

  validateButton() {
    const { email, password } = this.state;
    const regexEmail = /^\w+([.-_]?\w+)*@\w+([.-_]?\w+)*(\.\w{2,3})+$/;
    const regexPassword = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    const boolEmail = regexEmail.test(email);
    const boolPassword = regexPassword.test(password);
    if (boolPassword && boolEmail) return false;
    return true;
  }

  action() {
    const { dispatchEntry } = this.props;
    const { email } = this.state;
    dispatchEntry(email);
    this.setState({ redirect: true });
  }

  render() {
    const { email, password, redirect } = this.state;
    if (redirect) return <Redirect to="/carteira" />;
    const bool = this.validateButton();
    return (
      <div>
        <label htmlFor="email">
          <input
            value={ email }
            data-testid="email-input"
            type="text"
            placeholder="Email"
            onChange={ (event) => this.handleChange('email', event.target.value) }
          />
        </label>
        <label htmlFor="password">
          <input
            value={ password }
            data-testid="password-input"
            type="password"
            placeholder="Senha"
            onChange={ (event) => this.handleChange('password', event.target.value) }
          />
        </label>
        <input
          type="button"
          value="Entrar"
          disabled={ bool }
          onClick={ this.action }
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchEntry: (state) => dispatch(saveUser(state)),
});

Login.propTypes = {
  dispatchEntry: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
// referencias: https://www.ti-enxame.com/pt/javascript/validacao-de-senha-de-expressao-regular-javascript-com-caracteres-especiais/1067788241/
// referencias: https://pt.stackoverflow.com/questions/369892/como-redirecionar-para-uma-rota-usando-onclick-e-react-router
