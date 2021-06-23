import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { login } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      buttonDisable: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.formValidation = this.formValidation.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
    this.formValidation();
  }

  formValidation() {
    const minLength = 5;
    const regex = /\S+@\S+\.\S+/;
    const { email, password } = this.state;
    const validEmail = regex.test(email);
    const validPassword = password.length >= minLength;
    const validForm = validEmail && validPassword;
    if (validForm) {
      this.setState({
        buttonDisable: false,
      });
    } else {
      this.setState({
        buttonDisable: true,
      });
    }
  }

  render() {
    const { email, password, buttonDisable } = this.state;
    const { getEmail } = this.props;
    return (
      <div>
        <form>
          <input
            type="email"
            data-testid="email-input"
            name="email"
            value={ email }
            onChange={ this.handleChange }
          />
          <input
            type="password"
            data-testid="password-input"
            name="password"
            value={ password }
            onChange={ this.handleChange }
          />
          <Link
            to="/carteira"
          >
            <button
              type="button"
              disabled={ buttonDisable }
              onClick={ () => getEmail(email) }
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
  getEmail: (payload) => dispatch(login(payload)),
});

Login.propTypes = {
  getEmail: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);

// https://www.horadecodar.com.br/2020/09/07/expressao-regular-para-validar-e-mail-javascript-regex/
