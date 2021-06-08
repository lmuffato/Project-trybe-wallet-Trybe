import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { func, shape, string } from 'prop-types';

import { validadeEmail, validadePassword, emailUser } from '../actions';
import validadeLogin from '../utils/funtions';

class Login extends Component {
  render() {
    const { user, password, validade, email } = this.props;
    const validadeButton = validadeLogin(validade);
    return (
      <form>
        <label htmlFor="email">
          Email
          <input
            data-testid="email-input"
            type="email"
            id="email"
            placeholder="Digite seu E-mail"
            onChange={ ({ target }) => user(target.value) }
          />
        </label>
        <label htmlFor="senha">
          Password
          <input
            data-testid="password-input"
            type="password"
            id="senha"
            placeholder="Digite seu senha"
            onChange={ ({ target }) => password(target.value) }
          />
        </label>
        <Link to="/carteira">
          <button
            disabled={ validadeButton }
            type="button"
            onClick={ () => email(validade.user) }
          >
            Entrar
          </button>
        </Link>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  user: (payload) => dispatch(validadeEmail(payload)),
  password: (payload) => dispatch(validadePassword(payload)),
  email: (payload) => dispatch(emailUser(payload)),
});

const mapStateToProps = (state) => ({
  validade: state.user.validade,
});

Login.propTypes = {
  user: func.isRequired,
  password: func.isRequired,
  email: func.isRequired,
  validade: shape({
    user: string.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
