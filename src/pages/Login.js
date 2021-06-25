import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { setEmail } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      senha: '',
      button: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    }, () => {
      const { email, senha } = this.state;
      const sizePass = 6;
      if (/^[\w0-9.]+@\w+\.com$/.test(email) && senha.length >= sizePass) {
        this.setState({ button: false });
      } else {
        this.setState({ button: true });
      }
    });
  }

  handleClick() {
    const { btnClicked } = this.props;
    const { email } = this.state;
    btnClicked(email);
  }

  render() {
    const { button } = this.state;
    return (
      <form>
        <div>Login</div>
        <label htmlFor="input-email">
          Email:
          <input
            data-testid="email-input"
            type="text"
            name="email"
            id="input-email"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="input-password">
          Senha:
          <input
            data-testid="password-input"
            type="password"
            name="senha"
            id="input-password"
            onChange={ this.handleChange }
          />
        </label>
        <Link to="/carteira">
          <button
            type="button"
            disabled={ button }
            onClick={ this.handleClick }
          >
            Entrar
          </button>
        </Link>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  btnClicked: (payloadAction) => dispatch(setEmail(payloadAction)),
});

Login.propTypes = {
  btnClicked: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
