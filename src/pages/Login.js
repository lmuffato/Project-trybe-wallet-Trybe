import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { saveEmail } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      isValidEmail: false,
      isValidSenha: false,
    };
    this.validEmail = this.validEmail.bind(this);
    this.validSenha = this.validSenha.bind(this);
  }

  validEmail({ target: { value } }) {
    this.setState({ email: value });
    this.setState({ isValidEmail: value.match(/[a-z]+@[a-z]+.com/g) });
  }

  validSenha({ target: { value } }) {
    const minLength = 6;
    this.setState({ isValidSenha: value.length >= minLength });
  }

  render() {
    const { email, isValidEmail, isValidSenha } = this.state;
    const enable = isValidEmail && isValidSenha;
    const { login } = this.props;

    return (
      <div>
        <input
          onChange={ this.validEmail }
          type="text"
          data-testid="email-input"
          placeholder="Email"
        />
        <input
          onChange={ this.validSenha }
          type="password"
          data-testid="password-input"
          placeholder="Senha"
        />
        <Link to="/carteira">
          <button
            onClick={ () => login(email) }
            disabled={ !enable }
            type="button"
          >
            Entrar
          </button>
        </Link>
      </div>);
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (event) => dispatch(saveEmail(event)),
});

Login.propTypes = {
  login: PropTypes.string.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
