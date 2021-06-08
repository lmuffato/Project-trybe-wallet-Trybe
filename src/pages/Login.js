import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import login from '../actions/index';

class Login extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.toStore = this.toStore.bind(this);

    this.state = {
      email: '',
      password: '',
      validated: false,
    };
  }

  validateForm() {
    const { email, password } = this.state;
    const minPasswordSize = 6;

    const Vemail = (/\S+@\S+\.\S+/i).test(email);
    // FONTE: https://www.horadecodar.com.br/2020/09/07/expressao-regular-para-validar-e-mail-javascript-regex/
    const Vpassword = password.length >= minPasswordSize;

    if (Vemail && Vpassword) {
      this.setState({ validated: true });
    } else {
      this.setState({ validated: false });
    }
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, () => this.validateForm());
  }

  toStore() {
    const { validated, email, password } = this.state;
    const { userInfo } = this.props;
    if (validated) {
      userInfo(email, password);
    }
  }

  render() {
    const { validated } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="email">
            Email
            <input
              type="email"
              name="email"
              data-testid="email-input"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="password">
            Senha
            <input
              type="password"
              name="password"
              data-testid="password-input"
              onChange={ this.handleChange }
            />
            <button
              type="button"
              disabled={ !validated }
              onClick={ this.toStore }
            >
              Entrar
            </button>
          </label>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  userInfo: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  userInfo: (email, password) => dispatch(login(email, password)),
});

export default connect(null, mapDispatchToProps)(Login);
