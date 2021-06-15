import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { userData } from '../actions';
// 1. Crie uma página inicial de login com os seguintes campos e características:
// 2. Realize as seguintes verificações nos campos de email, senha e botão

class Login extends React.Component {
  constructor() {
    super();

    this.handleInput = this.handleInput.bind(this);

    /* Salve o email no estado da aplicação, com a chave email, assim que a pessoa usuária logar. */
    this.state = {
      email: '',
      password: '',
    };
  }

  handleInput({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { email, password } = this.state;
    const passLength = 6;
    /* https://www.w3resource.com/javascript/form/email-validation.php */
    const vEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    const { savedData } = this.props;
    return (
      <div>
        <h1>Login</h1>
        <form>
          {/* Deve ser criado um local para que a pessoa usuária insira email e senha. */}
          <label htmlFor="email-input">
            Email:
            <input
              data-testid="email-input"
              type="email"
              value={ email }
              id="email-input"
              onChange={ this.handleInput }
              name="email"
            />
          </label>
          <label htmlFor="password-input">
            Password:
            <input
              data-testid="password-input"
              type="password"
              value={ password }
              id="password-input"
              onChange={ this.handleInput }
              name="password"
            />
          </label>
          {/* A rota deve ser mudada para '/carteira' após o clique no botão 'Entrar'. */}
          <Link to="/carteira">
            {/* Crie um botão com o texto ‘Entrar’. */}
            <button
              type="button"
              onClick={ () => savedData(email, password) }
              /* A senha possui 6 ou mais caracteres. */
              disabled={ (vEmail.test(email) === false) || password.length < passLength }
            >
              Entrar
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  savedData: (email, password) => dispatch(userData(email, password)),
});

Login.propTypes = {
  savedData: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
