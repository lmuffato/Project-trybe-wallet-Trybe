import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import userAction from '../actions/index';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      logged: false,
    };
  }

  render() {
    const quanty = 6;
    const { email, password, logged } = this.state;
    const { user } = this.props;
    return (
      <>
        <form>
          <label htmlFor="email-input">
            Email:
            <input
              type="email"
              data-testid="email-input"
              name="email"
              value={ email }
              onChange={ (e) => this.setState({ email: e.target.value }) }
            />
            <br />
            <br />
          </label>
          <label htmlFor="password-input">
            Senha:
            <input
              type="password"
              data-testid="password-input"
              name="password"
              value={ password }
              onChange={ (e) => this.setState({ password: e.target.value }) }
            />
          </label>
          <br />
          <br />
          <button
            type="button"
            onClick={ () => this.setState({ logged: true }, () => user(email)) }
            disabled={ !(password.length >= quanty
              && email.includes('.com') && email.includes('@')) }
          >
            Entrar
          </button>
        </form>
        { logged ? <Redirect to="/carteira" /> : null }
      </>
    );
  }
}

Login.propTypes = {
  user: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  user: (data) => dispatch(userAction(data)),
});

export default connect(null, mapDispatchToProps)(Login);
// pesquisas feitas em https://www.devmedia.com.br/validando-e-mail-em-inputs-html-com-javascript/26427;
// https://pt.stackoverflow.com/questions/22439/como-habilitar-e-desabilitar-bot%C3%A3o-a-partir-do-onclick-ou-onchange-do-select;
// https://github.com/Gui-lira;
// https://pt.stackoverflow.com/questions/374376/como-chamar-duas-fun%C3%A7%C3%B5es-no-onclick-reactjs;
