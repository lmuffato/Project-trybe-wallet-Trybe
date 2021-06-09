import React from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import { Link } from 'react-router-dom';
import { saveEmail } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      disabled: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.validateLoginInfos = this.validateLoginInfos.bind(this);
  }

  handleChange(event) {
    const { target } = event;
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => this.validateLoginInfos());
  }

  validateLoginInfos() {
    const { email, password } = this.state;
    const regexEmail = new RegExp(/^[\S.]+@[a-z]+.\w{2,3}$/g).test(email);
    const regexPass = new RegExp(/[0-9a-zA-Z$*&@#]{6}/).test(password);
    if (regexEmail && regexPass) {
      this.setState({ disabled: false });
    } else {
      this.setState({ disabled: true });
    }
  }

  render() {
    const { disabled, email } = this.state;
    const { addEmail } = this.props;
    return (
      <form>
        <label
          htmlFor="email"
        >
          E-mail:
          <input
            data-testid="email-input"
            itemID="email"
            type="email"
            name="email"
            id="email-input"
            onChange={ this.handleChange }
            required
          />
        </label>
        <label
          htmlFor="password"
        >
          Senha:
          <input
            data-testid="password-input"
            itemID="password"
            type="password"
            name="password"
            id="password-input"
            onChange={ this.handleChange }
            required
          />
        </label>
        <Link to="/carteira">
          <button
            type="button"
            id="login-button"
            onClick={ () => addEmail(email) }
            disabled={ disabled }
          >
            Entrar
          </button>
        </Link>
      </form>
    );  }
}

const mapDispatchToProps = (dispatch) => ({
  addEmail: (email) => dispatch(saveEmail(email)),
});

Login.propTypes = {
  addEmail: func,
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);