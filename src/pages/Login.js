import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { saveEmail } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      passWord: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });// faz desestruturação do das linhas abaixo { email, passWord }
  }

  buttonDisabled() {
    const { email, passWord } = this.state;
    const emailRegex = /\S+@\S+\.\S+/; // regex  em https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
    const passMaxLength = 6;
    if (emailRegex.test(email) === true && passWord.length >= passMaxLength) {
      return false;
    }
    return true;
  } // auxilio e explicação do Lucas Lara no plantão

  render() {
    const { email } = this.state;
    const { reducerLogin } = this.props; // props desconstruida para usar no botão (course 16.2)

    return (
      <div>
        <form>
          <label htmlFor="email-input">
            Email
            <input
              type="text"
              name="email"
              data-testid="email-input"
              onChange={ this.handleChange }
              placeholder="E-mail"
            />
          </label>

          <label htmlFor="password-input">
            Senha
            <input
              type="text"
              name="passWord"
              data-testid="password-input"
              onChange={ this.handleChange }
              placeholder="Password"
            />
          </label>

          <button
            type="button"
            disabled={ this.buttonDisabled() }
            onClick={ () => reducerLogin({ email }) }
          >
            <Link to="/carteira">
              Entrar
            </Link>
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  reducerLogin: (email) => dispatch(saveEmail(email)),
});

Login.propTypes = {
  reducerLogin: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
