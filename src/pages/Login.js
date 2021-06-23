import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleEmail } from '../actions/index';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      disabledButton: true,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { type, value } = event.target;
    const { email, password } = this.state;
    const MIN_PASSWORD = 5;
    this.setState({ [type]: value });
    // referência do regex: Postagem do Rafael Medeiros Gomes.
    // link: https://trybecourse.slack.com/archives/C01L16B9XC7/p1623175696043700
    if (/^\w+@\w+.com$/.test(email) === true && password.length >= MIN_PASSWORD) {
      this.setState({ disabledButton: false });
    }
  }

  render() {
    const { disabledButton, email } = this.state;
    const { loginEmail } = this.props;
    return (
      <div>
        <p>Olá, essa é a tela de login</p>
        <input
          data-testid="email-input"
          type="email"
          required
          placeholder="Digite seu email"
          onChange={ this.handleChange }
        />
        <input
          data-testid="password-input"
          type="password"
          required
          placeholder="Digite sua senha"
          onChange={ this.handleChange }
        />
        <Link to="/carteira">
          <button
            disabled={ disabledButton }
            type="button"
            onClick={ () => loginEmail(email) }
          >
            Entrar
          </button>
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  loginEmail: (email) => dispatch(handleEmail(email)),
});
// Referência: https://blog.rocketseat.com.br/redux-o-passo-a-passo/

Login.propTypes = {
  loginEmail: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
