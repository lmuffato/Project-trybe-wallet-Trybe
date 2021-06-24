import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login as loginAction } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };

    this.hundleChange = this.hundleChange.bind(this);
  }

  hundleChange({ target }) {
    if (target.type === 'email') {
      this.setState({ email: target.value });
    } else if (target.type === 'password') {
      this.setState({ password: target.value });
    }
  }

  renderButtonDesabled() {
    return (
      <button
        type="button"
        disabled
      >
        Entrar
      </button>
    );
  }

  renderButtonEnabled() {
    const { login } = this.props;
    const { email, password } = this.state;
    return (
      <Link to="/carteira">
        <button
          type="button"
          onClick={ () => login({ email, password }) }
        >
          Entrar
        </button>
      </Link>
    );
  }

  render() {
    const { email, password } = this.state;
    const emailModel = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const passwordMinLength = 6;

    return (
      <div>
        <form>
          <input
            type="email"
            data-testid="email-input"
            value={ email }
            onChange={ this.hundleChange }
          />
          <input
            type="password"
            data-testid="password-input"
            value={ password }
            onChange={ this.hundleChange }
          />
        </form>
        {
          password.length >= passwordMinLength && email.match(emailModel)
            ? this.renderButtonEnabled()
            : this.renderButtonDesabled()
        }
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (e) => dispatch(loginAction(e)),
});

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
