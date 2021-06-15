import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginAction } from '../actions/index';
import Header from '../components/Header';
import './loginCSS.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      disabled: true,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    // regex model sugerido na thread do slack https://trybecourse.slack.com/archives/C01L16B9XC7/p1623175696043700
    const emailRegex = /^\w+@\w+.com$/;
    const { email, password } = this.state;
    const minlength = 5;
    if (emailRegex.test(email) && (password.length >= minlength)) {
      return (this.setState({ disabled: false }));
    } return (this.setState({
      disabled: true,
    }));
  }

  render() {
    const { disabled, email, password } = this.state;
    const { meudispatch } = this.props;
    return (
      <section className="loginPage">
        <Header />
        <div className="loginBox">
          <h2>Login</h2>
          <form>
            <label htmlFor="user-email">
              E-mail:
              <input
                data-testid="email-input"
                placeholder="nome@email.com"
                id="user-email"
                type="email"
                name="email"
                value={ email }
                onChange={ (event) => this.handleChange(event) }
              />
            </label>
            <br />
            <label htmlFor="user-passw">
              Senha :
              <input
                data-testid="password-input"
                placeholder="senha"
                id="user-passw"
                type="text"
                name="password"
                value={ password }
                onChange={ (event) => this.handleChange(event) }
              />
            </label>
            <br />
            <Link to="/carteira">
              <button
                type="button"
                data-testid="edit-btn"
                disabled={ disabled }
                onClick={ () => meudispatch(email) }
              >
                Entrar
              </button>
            </Link>
          </form>
        </div>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  meudispatch: (email) => dispatch(loginAction(email)),
});
// é uma função que retorna um objeto = () => ({}); 2, recebe por parametro o dispatch, define as actions que serao disparadas, recebendo via props
// vou passar a propriedade da action como chave, ela vai receber uma função, que tem como parametro user e ela disparada dispatch(actionCreator({ user })), e passa
// como parametro da actionCreator um parametro, o que deve ser adicionado, o payload

// recebendo dados do estado global // lembrar de add ao conect
/* const mapStateToProps = (state) => ({
  userTypedEmail: state.user.email,
  userTypedPassword: state.user.user.password,
  // importar as chaves, se eu quiser ler as propriedades do state, eu vou usar esta chave que eu uso no mapState
}); */

Login.propTypes = {
  loginAction: PropTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);
