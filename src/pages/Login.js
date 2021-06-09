import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.validSubmit = this.validSubmit.bind(this);
    this.eventClick = this.eventClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  eventClick() {
    const { history, getEmail } = this.props;
    const { email } = this.state;
    getEmail(email);
    if (this.validSubmit()) history.push('/carteira');
  }

  isValidEmail(email) {
    const valid = email.match(/^([\w.-]+)@([\w-]+)((.(\w){2,3})+)$/);
    return valid != null;
  }

  isValidPassword(password) {
    const minimumCharacter = 6;
    return password.length >= minimumCharacter;
  }

  validSubmit() {
    const { password, email } = this.state;
    return this.isValidEmail(email) && this.isValidPassword(password);
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="email">
            E-mail:
            <input
              data-testid="email-input"
              id="email"
              name="email"
              value={ email }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="password">
            Senha:
            <input
              data-testid="password-input"
              type="password"
              id="password"
              name="password"
              value={ password }
              onChange={ this.handleChange }
            />
          </label>
          <button
            type="submit"
            onClick={ this.eventClick }
            disabled={ !this.validSubmit() }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  getEmail: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getEmail: (email) => dispatch(login(email)),
});

export default connect(null, mapDispatchToProps)(Login);
