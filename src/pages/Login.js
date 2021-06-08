import React, { Component } from 'react';
import { connect } from 'react-redux';
import { validadeEmail, validadePassword } from '../actions';
import validadeLogin from '../utils/funtions';

class Login extends Component {
  render() {
    const { email, password, validade } = this.props;
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
            onChange={ ({ target }) => email(target.value) }
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
        <button disabled={ validadeButton } type="button">Entrar</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  email: (payload) => dispatch(validadeEmail(payload)),
  password: (payload) => dispatch(validadePassword(payload)),
});

const mapStateToProps = (state) => ({
  validade: state.user.validade,
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
