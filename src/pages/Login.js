import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import storeLog from '../actions/index';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      disable: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleState = this.handleState.bind(this);
    this.storeDispatch = this.storeDispatch.bind(this);
  }

  // lógica implementada com a ajuda do Adelino, turma 10 - A

  // componentDidUpdate() {
  //   this.handleChange();
  //   console.log('lala');
  // }

  handleState({ target: { value, name } }) {
    this.setState({ [name]: value });
    this.handleChange();
  }

  handleChange() {
    const lengthNumber = 5;
    const { email, password } = this.state;
    if (email.includes('.com') && password.length >= lengthNumber) {
      this.setState({ disable: false });
    } else {
      this.setState({ disable: true });
    }
  }

  storeDispatch() {
    const { email } = this.state;
    this.props.storeLog(email);
  }

  render() {
    console.log(storeLog);
    const { disable } = this.state;
    return (
      <section>
        <form>
          <label htmlFor="Email">
            {' '}
            Email
            <input
              data-testid="email-input"
              id="Email"
              placeholder="Insert e-mail"
              type="email"
              name="email"
              onChange={ this.handleState }
              required
            />
          </label>
          <label htmlFor="Password">
            {' '}
            Password
            <input
              data-testid="password-input"
              id="Password"
              placeholder="Insert password"
              type="text"
              name="password"
              min="6"
              onChange={ this.handleState }
              required
            />
          </label>
          <Link to="/carteira">
            <button
              type="submit"
              id="loginButton"
              disabled={ disable }
              onClick={ this.storeDispatch }
            >
              Entrar
            </button>
          </Link>
        </form>
      </section>
    );
  }
}

// Referência a Bruno, me ajudou a entender todo conceito de stateToProps e Dispatch.

const mapStateToProps = (state) => ({
  email: state.user.email,
});

const mapDispatchToProps = (dispatch) => ({
  storeLog: (email) => dispatch(storeLog(email)),
}
);

Login.propTypes = {
  storeLog: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
