import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '',
      emailValid: false,
      senhaValid: false,
      disabled: true,
      redirect: false,
    };
    this.changeEmail = this.changeEmail.bind(this);
    this.changeSenha = this.changeSenha.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  changeEmail(event) {
    this.setState({ email: event.target.value });
    const status = event.target.checkValidity();
    const { senhaValid } = this.state;

    if (senhaValid && status) {
      this.setState({
        disabled: false,
        emailValid: true,
      });
    } else if (status) {
      this.setState({ emailValid: true });
    } else {
      this.setState({
        disabled: true,
        emailValid: false,
      });
    }
  }

  changeSenha(event) {
    this.setState({ senha: event.target.value });
    const status = event.target.checkValidity();
    const { emailValid } = this.state;

    if (emailValid && status) {
      this.setState({
        disabled: false,
        senhaValid: true,
      });
    } else if (status) {
      this.setState({ senhaValid: true });
    } else {
      this.setState({
        disabled: true,
        senhaValid: false,
      });
    }
  }

  handleClick() {
    const { email, senha } = this.state;
    this.setState({ redirect: true });
    const { user } = this.props;
    user({ email, senha });
  }

  render() {
    const { email, senha, disabled, redirect } = this.state;

    return (
      <form method="get">
        <input
          type="text"
          value={ email }
          placeholder="email"
          data-testid="email-input"
          required
          onChange={ (event) => this.changeEmail(event) }
          pattern="(\w\.?)+@[\w\.-]+\.\w{2,4}"
        />
        <input
          type="password"
          value={ senha }
          placeholder="senha"
          data-testid="password-input"
          minLength={ 6 }
          onChange={ (event) => this.changeSenha(event) }
          required
        />
        <button
          type="button"
          disabled={ disabled }
          onClick={ () => this.handleClick() }
        >
          Entrar
        </button>
        { redirect && <Redirect to="/carteira" /> }
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  user: (payload) => dispatch(login(payload)),
});

Login.propTypes = {
  user: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
