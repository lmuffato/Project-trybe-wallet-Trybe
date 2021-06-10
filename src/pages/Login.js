import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import loginEmail from '../actions/user';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      senha: '',
      disabled: true,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });

    // lógica de validação baseada nos códigos de Elisa França - Turma 10 - Tribo A
    // https://github.com/tryber/sd-010-a-project-trybewallet/pull/62/commits/77bf826699b7cb516a1dbaa30dd0ee8eea2a1d01
    const { email, senha } = this.state;
    // regex model encontrado no link da thread https://trybecourse.slack.com/archives/C01L16B9XC7/p1623175696043700
    const emailRegex = /^\w+@\w+.com$/;
    const minSenha = 5;
    if (emailRegex.test(email) === true && senha.length >= minSenha) {
      this.setState({ disabled: false });
    }
  }

  render() {
    const { email, disabled } = this.state;
    const { login } = this.props;
    return (
      <div>
        <form>
          <label htmlFor="email">
            E-mail:
            <input
              id="email"
              name="email"
              type="email"
              data-testid="email-input"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="senha">
            Senha:
            <input
              id="senha"
              name="senha"
              type="password"
              data-testid="password-input"
              onChange={ this.handleChange }
            />
          </label>
          <button
            disabled={ disabled }
            onClick={ () => login({ email }) }
            type="button"
          >
            <Link className={ disabled ? 'disabledLink' : '' } to="/carteira">
              Entrar
            </Link>
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (payload) => dispatch(loginEmail(payload)),
});

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
