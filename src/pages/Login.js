import React from 'react';

import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addEmail } from '../actions/index';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      logged: false,
    };
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    }, this.validateForm);
  }

  render() {
    const { email, password, logged } = this.state;
    const { user } = this.props;
    return (
      <div>
        {logged ? <Redirect to="/carteira" /> : ''}
        <main>
          <header>TRYBE</header>
          <form>
            <input
              type="email"
              placeholder="email"
              value={ email }
              name="email"
              data-testid="email-input"
              onChange={ this.handleChange }
            />
            <input
              type="password"
              placeholder="password"
              minLength="6"
              value={ password }
              name="password"
              data-testid="password-input"
              onChange={ this.handleChange }
            />
            <button
              type="button"
              onClick={ () => this.setState({ logged: true }, () => user(email)) }
              disabled={ !(password.length >= quanty
              && email.includes('.com') && email.includes('@')) }
            >
              Entrar
            </button>
          </form>
        </main>
      </div>
    );
  }
}
Login.propTypes = {
  user: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  user: (data) => dispatch(addEmail(data)),
});

export default connect(null, mapDispatchToProps)(Login);
