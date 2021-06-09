import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { validEmail } from '../actions/index';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      senha: '',
    };

    this.hamdleChange = this.hamdleChange.bind(this);
    this.validEmail = this.validEmail.bind(this);
    this.validSenha = this.validSenha.bind(this);
    this.validButton = this.validButton.bind(this);
  }

  hamdleChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  validEmail() {
    const { email } = this.state;
    const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    let boolean = true;

    if (email.match(regexEmail)) {
      boolean = false;
    }
    return boolean;
  }

  validSenha() {
    const { senha } = this.state;
    const MIN_LENGTH = 6;
    let boolean = true;

    if (senha.length >= MIN_LENGTH) {
      boolean = false;
    }
    return boolean;
  }

  validButton() {
    if (this.validEmail() === false && this.validSenha() === false) {
      return false;
    }
    return true;
  }

  render() {
    const { email, senha } = this.state;
    const { emailDispatch } = this.props;
    return (
      <div>
        <section>
          <input
            type="email"
            name="email"
            placeholder="email"
            data-testid="email-input"
            onChange={ this.hamdleChange }
          />
          <input
            type="password"
            name="senha"
            value={ senha }
            placeholder="senha"
            data-testid="password-input"
            onChange={ this.hamdleChange }
          />
          <div>
            <Link to="/carteira">
              <button
                type="button"
                disabled={ this.validButton() }
                onClick={ () => emailDispatch(email) }
              >
                Entrar
              </button>
            </Link>
          </div>
        </section>
      </div>
    );
  }
}

Login.propTypes = {
  emailDispatch: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  emailDispatch: (payload) => dispatch(validEmail(payload)),
});

export default connect(null, mapDispatchToProps)(Login);

// Código de validação de email com regex:
// https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
