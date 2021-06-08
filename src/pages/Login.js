import React from 'react';
import { Link } from 'react-router-dom';
import Input from './components/Input';
import LoginBtn from './components/LoginBtn';

class Login extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange(e) {
    const { type, value } = e.target;
    this.setState({
      [type]: value,
    });
  }

  render() {
    const { email, password } = this.state;
    const { handleChange } = this;
    // https://stackoverflow.com/questions/201323/how-to-validate-an-email-address-using-a-regular-expression onde peguei regex
    // https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript onde aprendi a usar o .test
    let btnDisable = true;
    const passwordMinimumLength = 6;
    if (password.length >= passwordMinimumLength && /^\S+@\S+\.\S+$/.test(email)) {
      btnDisable = false;
    } else {
      btnDisable = true;
    }
    return (
      <form>

        <h1>Login</h1>
        <Input
          name="email"
          value={ email }
          testId="email-input"
          onChange={ handleChange }
        />

        <Input
          name="password"
          value={ password }
          testId="password-input"
          onChange={ handleChange }
        />
        <Link to="/carteira">
          <LoginBtn
            type="submit"
            btnDisable={ btnDisable }
          />
        </Link>
      </form>
    );
  }
}

export default Login;
