import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  validateSubmit() {
    const { email, password } = this.state;
    const min = 6;
    const emailStandard = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    if ((password.length >= min) && (emailStandard.test(email) === true)) {
      return false;
    }
    return true;
  }

  render() {
    const { email, password } = this.state;
    const { user } = this.props;
    return (
      <div>
        <form>
          <input
            data-testid="email-input"
            type="email"
            onChange={ (e) => this.setState({ email: e.target.value }) }
            value={ email }
          />
          <input
            data-testid="password-input"
            type="password"
            onChange={ (e) => this.setState({ password: e.target.value }) }
            value={ password }
          />
          <Link to="/carteira">
            <button
              type="button"
              disabled={ this.validateSubmit() }
              onClick={ () => user(email) }
            >
              Entrar
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userLogin: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  user: (payload) => dispatch(login(payload)),
});

Login.propTypes = {
  user: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Login);
