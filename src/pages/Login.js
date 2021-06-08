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
      btnDisable: true,
    };
  }

  handleChange(e) {
    const { email, password } = this.state;
    const { type, value } = e.target;
    this.setState({
      [type]: value,
    });
    // https://stackoverflow.com/questions/201323/how-to-validate-an-email-address-using-a-regular-expression onde peguei regex
    // https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript onde aprendi a usar o .test
    const passwordMinimumLength = 6;
    if (password.length >= passwordMinimumLength && /^\S+@\S+\.\S+$/.test(email)) {
      this.setState({ btnDisable: false });
    } else {
      this.setState({ btnDisable: true });
    }
  }

  render() {
    const { email, password, btnDisable } = this.state;
    const { handleChange, handleClick } = this;
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
        <Link to="/wallet">
          <LoginBtn
            type="submit"
            onClick={ handleClick }
            btnDisable={ btnDisable }
          />
        </Link>
      </form>
    );
  }
}

export default Login;
