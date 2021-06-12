import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { func } from 'prop-types';
import { user as userlogin } from '../actions/index';
// Referencias button: https://www.youtube.com/watch?v=sN9QvQAkyug
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
    const { email, password } = this.state;
    const { user } = this.props;
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
          onClick={ () => user({ email, password }) }
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
  userInfo: (payload) => dispatch(userlogin(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
