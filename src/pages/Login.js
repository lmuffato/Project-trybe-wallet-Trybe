import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import saveEmail from '../actions/index';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      isBtnDisabled: true,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.isInputValid = this.isInputValid.bind(this);
  }

  isInputValid() {
    const { email, password } = this.state;
    const pwdMinChar = 5;
    const regex = /\S+@\S+\.\S+/;
    if (regex.test(String(email).toLowerCase()) && password.length > pwdMinChar) {
      this.setState({ isBtnDisabled: false });
    } else this.setState({ isBtnDisabled: true });
  }

  handleChange({ target }) {
    const { id, value } = target;
    this.setState({
      [id]: value,
    }, () => this.isInputValid());
  }

  handleClick() {
    const { saveStateEmail } = this.props;
    const { email } = this.state;
    saveStateEmail(email);
  }

  render() {
    const { email, password, isBtnDisabled } = this.state;
    return (
      <div>
        Login
        <section>
          <input
            data-testid="email-input"
            id="email"
            value={ email }
            onChange={ (e) => this.handleChange(e) }
          />
          <input
            data-testid="password-input"
            id="password"
            value={ password }
            onChange={ (e) => this.handleChange(e) }
          />
          <Link to="/carteira">
            <button
              type="submit"
              disabled={ isBtnDisabled }
              onClick={ () => this.handleClick() }
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
  saveStateEmail: (state) => dispatch(saveEmail(state)) });

Login.propTypes = {
  saveStateEmail: PropTypes.string.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
