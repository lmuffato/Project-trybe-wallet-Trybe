import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loginAction } from '../actions/index';

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

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
    const regexEmail = /\S+@\S+\.\S+/;
    const validatePassword = 5;
    const { email, password } = this.state;
    if (regexEmail.test(email) === true && password.length >= validatePassword) {
      return this.setState({ disabled: false });
    } return (this.setState({ disabled: true }));
  }

  render() {
    const { email, password, disabled } = this.state;
    const { emailDispatch } = this.props;
    return (
      <section>
        <form>
          <label htmlFor="email">
            <input
              data-testid="email-input"
              type="email"
              name="email"
              value={ email }
              placeholder="email"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="password">
            <input
              data-testid="password-input"
              type="password"
              name="password"
              value={ password }
              placeholder="senha"
              onChange={ this.handleChange }
            />
          </label>
        </form>
        <Link className={ disabled ? 'disabledLink' : '' } to="/carteira">
          <button
            disabled={ disabled }
            className={ disabled ? 'disabled-bttn' : 'enter-bttn' }
            type="button"
            onClick={ () => emailDispatch(email) }
          >
            Entrar
          </button>
        </Link>
      </section>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  emailDispatch: (email) => dispatch(loginAction(email)),
});

Login.propTypes = {
  loginAction: PropTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);
