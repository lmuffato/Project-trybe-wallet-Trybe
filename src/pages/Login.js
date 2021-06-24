// Requisitos 2 e 3 feitos com ajuda dos colegas Nilson Ribeiro, Perycles Reis, Lucas Lara, Andy, Anderson Nascimento;
import React from 'react';
import '../App.css';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getEmail } from '../actions';
import koi from '../koi.png';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      disabled: true,
    };
    this.inputsValidation = this.inputsValidation.bind(this);
    this.changeValidEmail = this.changeValidEmail.bind(this);
    this.changeValidPassword = this.changeValidPassword.bind(this);
  }

  inputsValidation() {
    const { email, password } = this.state;
    const emailValidTest = /\w+@\w+\.\w+/gi.test(email);
    const passwordIsValid = /(.{5,})/gi.test(password);
    if (emailValidTest && passwordIsValid) {
      this.setState({
        disabled: false,
      });
    }
  }

  // função para pegar o value no input e-mail e alterar estado se valido
  changeValidEmail(event) {
    this.setState({
      email: event.target.value,
    });
  }

  // função para pegar o value do input password altera estado se valido
  changeValidPassword(event) {
    this.inputsValidation();
    this.setState({
      password: event.target.value,
    });
  }

  render() {
    const { disabled, email } = this.state;
    const { getEmailReducer } = this.props;
    return (
      <div>
        <img className="koi-fish" src={ koi } alt="koi fish" />
        <div className="container">
          <div className="card">
            <div className="card_title">Personal Wallet</div>
            <div className="card_title-info">Access your expenses</div>
            <form className="card_form">
              <input
                className="input_field"
                data-testid="email-input"
                placeholder="E-mail"
                type="email"
                onChange={ this.changeValidEmail }
              />
              <input
                className="input_field"
                data-testid="password-input"
                placeholder="Password"
                type="password"
                onChange={ this.changeValidPassword }
              />
            </form>
            <Link to="/carteira">
              <button
                className="card_button"
                disabled={ disabled }
                type="button"
                onClick={ () => getEmailReducer(email) }
              >
                Entrar
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getEmailReducer: (email) => dispatch(getEmail(email)),
});

Login.propTypes = {
  getEmailReducer: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
