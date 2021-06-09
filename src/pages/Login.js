import React from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import imagem from '../money.jpg';
import { login } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isBlocked: false,
    };
    // this.handlePassword = this.handlePassword.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // validação do email feita através do código do artigo abaixo
  // https://www.horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/
  // ajudado pelo João Andrade Jr que recomendou juntar as funções de
  // validação de email e password em uma só
  onChangeEmail() {
    const { email, password } = this.state;
    const size = 6;
    const regex = /\S+@\S+\.\S+/;
    const isBlocked = regex.test(email) && password.length >= size;
    this.setState({
      isBlocked,
    });
  }

  handleChange(e) {
    const { value, id } = e.target;
    this.setState({
      [id]: value,
    }, () => this.onChangeEmail());
  }

  render() {
    const { LogIn } = this.props;
    const { email, password, isBlocked } = this.state;
    return (
      <div className="mainLogin">
        Pocket Login
        <img src={ imagem } alt="imagem bolso" />
        <label htmlFor="email">
          Email
          <br />
          <input
            type="text"
            id="email"
            className="email"
            value={ email }
            onChange={ (e) => this.handleChange(e) }
            data-testid="email-input"
          />
        </label>
        <label htmlFor="password">
          Password
          <br />
          <input
            type="password"
            id="password"
            onChange={ (e) => this.handleChange(e) }
            className="password"
            value={ password }
            data-testid="password-input"
          />
        </label>
        <button
          type="button"
          disabled={ !isBlocked }
          onClick={ () => LogIn() }
        >
          Entrar
        </button>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({
//   email: state.user.email,
// });

const mapDispatchToProps = (dispatch) => ({
  LogIn: ({ data }) => dispatch(login({ data })),
});

Login.propTypes = {
  LogIn: Proptypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
