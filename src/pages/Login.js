import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getEmail } from '../actions/index';

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

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
    const { email, senha } = this.state;
    const result = /\w+@\w+\.\w+/gi.test(email);
    const resultSenha = /(.{5,})/gi.test(senha);
    if (result && resultSenha) {
      this.setState({ disabled: false });
    }
  }

  render() {
    const { disabled, email } = this.state;
    const { emailReducer } = this.props;
    return (
      <div>
        <form>
          <input
            name="email"
            type="email"
            placeholder="Login"
            data-testid="email-input"
            onChange={ this.handleChange }
          />
          <input
            name="senha"
            type="password"
            placeholder="Senha"
            data-testid="password-input"
            onChange={ this.handleChange }
          />
          <Link to="/carteira">
            <button
              type="button"
              disabled={ disabled }
              onClick={ () => emailReducer(email) }
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
  emailReducer: (email) => dispatch(getEmail(email)),
});

Login.propTypes = {
  emailReducer: PropTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);
