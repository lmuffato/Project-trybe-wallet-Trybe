import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { func } from 'prop-types';
import { user as userlogin } from '../actions/index';
// Referencias button: https://www.youtube.com/watch?v=sN9QvQAkyug
// Referencia validação email e password: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
// https://www.youtube.com/watch?v=JiFCwo3iBuk&t=579s
// Requesitos feito olhando código de Luan Ramalho turma 10a

const five = 5;
class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.validInput = this.validInput.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  validInput() {
    const { password, email } = this.state;
    const re = /\b[\w.-]+@[\w.-]+\.\w{2,4}\b/gi;
    if (re.test(email) && password.length > five) {
      return false;
    }
    return true;
  }

  render() {
    const { state } = this;
    const { email, password } = this.state;
    const { userDispatch } = this.props;
    return (
      <form>
        <input
          type="email"
          data-testid="email-input"
          value={ email }
          placeholder="E-mail"
          onChange={ this.handleChange }
          name="email"
        />
        <input
          type="password"
          data-testid="password-input"
          value={ password }
          placeholder="Password"
          onChange={ this.handleChange }
          name="password"
        />
        <Link
          to="/carteira"
          onClick={ () => userDispatch({ state }) }
          disabled={ this.validInput() }
        >
          <button type="button" disabled={ this.validInput() }>Entrar</button>
        </Link>
      </form>
    );
  }
}

Login.propTypes = ({
  user: func,
}).isRequired;

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  userDispatch: (payload) => dispatch(userlogin(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
