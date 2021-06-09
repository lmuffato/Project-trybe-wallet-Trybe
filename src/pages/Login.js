import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loginEmail } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    const { email, password } = this.state;
    const { login } = this.props;
    const minimunPasswordLength = 6;

    return (
      <div>
        Login
        <section>
          <input
            type="email"
            data-testid="email-input"
            placeholder="alguem@email.com"
            onChange={ (event) => this.setState({ email: event.target.value }) }
          />
          <input
            type="password"
            data-testid="password-input"
            onChange={ (event) => this.setState({ password: event.target.value }) }
            minLength="6"
          />
          <Link to="/carteira">
            <button
              type="submit"
              onClick={ () => {
                login(email);
              } }
              disabled={
                email.includes('@') !== true
                || password.length < minimunPasswordLength
                || email.includes('.com') !== true
              }
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
  login: (email) => dispatch(loginEmail(email)),
});

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);

// Entendi como utilizar a propriedade disabled com uma condição através do:
// https://reactgo.com/react-disable-button-input-empty/
// https://www.w3schools.com/tags/att_button_disabled.asp
