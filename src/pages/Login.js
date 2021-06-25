import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginAction } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      disabled: true,
    };
    this.handleState = this.handleState.bind(this);
    // this.showBtn = this.showBtn.bind(this);
  }

  handleState({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  //   showBtn() {
  // Essa função serve a mecanica do button disabled

  //   }

  render() {
    const { email, password, disabled } = this.state;
    const { dispatchLogin } = this.props;
    return (
      <div>
        <form>
          <input
            type="email"
            name="email"
            value={ email }
            onChange={ this.handleState }
            placeholder="e-mail"
            data-testid="email-input"
          />
          <input
            type="password"
            name="password"
            value={ password }
            minLength="6"
            onChange={ this.handleState }
            placeholder="password"
            data-testid="password-input"
          />
          <Link to="/carteira">
            <button
              type="button"
              onClick={ () => dispatchLogin(email) }
              disabled={ disabled }
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
  dispatchLogin: (email) => dispatch(loginAction(email)) });

Login.propTypes = {
  dispatchLogin: PropTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);
