import React from 'react';

class Login extends React.Component {
  /* constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      loged: false,
    };
  }

  handleChange({ target: { value } }) {
    this.setState(() => ({ email: value }));
  }
  /* handleChange = ({target: {value, name}}) => {
    this.setState({ [name]: value });
  } */

  render() {
    return (
      <main>
        <header>TRYBE</header>
        <form>
          <input
            type="email"
            placeholder="email"
            name="email"
            data-testid="email-input"
            onChange={ this.handleChange }
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            data-testid="password-input"
            onChange={ this.handleChange }
          />
          <button type="button">Entrar</button>
        </form>
      </main>
    );
  }
}
export default Login;
