import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { saveEmail } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    // this.handleClick = this.handleClick.bind(this);

    this.state = {
      email: '',
      password: '',
      buttonOk: false,
    };
  }

  // regex utilizado do projeto em grupo com amigos.
  validateFields() {
    const CARACTER_MIN = 6;
    const { password, email } = this.state;
    const regex = /^[\w.]+@[a-z]+\.\w{2,3}$/g;
    const buttonOk = password.length >= CARACTER_MIN && regex.test(email);
    this.setState({ buttonOk });
  }

  handleChange({ target }) {
    const { id, value } = target;
    this.setState({
      [id]: value,
    }, () => this.validateFields());
  }

  // handleClick() {
  //   const { email } = this.state;
  //   const { save } = this.props;
  //   save(email);
  // }

  render() {
    const { email, password, buttonOk } = this.state;
    const { save } = this.props;

    return (
      <div>
        <form>
          <label htmlFor="email">
            E-mail
            <input
              type="email"
              name="email"
              id="email"
              value={ email }
              placeholder="Digite seu e-mail"
              data-testid="email-input"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="password">
            Senha
            <input
              type="password"
              name="password"
              id="password"
              value={ password }
              placeholder="Digite sua senha"
              data-testid="password-input"
              onChange={ this.handleChange }
            />
          </label>
          <Link to="/carteira">
            <button
              type="button"
              disabled={ !buttonOk }
              onClick={ () => save(email) }
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
  save: (email) => dispatch(saveEmail(email)),
});

Login.propTypes = {
  save: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
