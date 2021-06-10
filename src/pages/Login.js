import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { login } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, password } = this.state;
    const { emailDispatchProps } = this.props;
    const minPassword = 5;

    return (
      <div>
        <section>
          <h3>Enter Email and Password</h3>
          <input
            type="email"
            name="email"
            data-testid="email-input"
            placeholder="Email"
            onChange={ this.handleChange }
          />
          <input
            type="password"
            name="password"
            data-testid="password-input"
            placeholder="PassWord"
            onChange={ this.handleChange }
          />
          <Link to="/carteira">
            <button
              onClick={ () => emailDispatchProps({ email }) }
              type="button"
              disabled={ !email.match(/\S+@\S+\.\S+/) || password.length <= minPassword }
            >
              Entrar
            </button>
          </Link>
        </section>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  emailDispatchProps: (payload) => dispatch(login(payload)),
});

Login.propTypes = {
  emailDispatchProps: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
