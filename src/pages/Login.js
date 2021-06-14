import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
  }

  render() {
    const { email } = this.state;
    return (
      <form>
        <label htmlFor="email-input">
          <input
            type="email"
            data-testid="email-input"
            name="email"
            value={ email }
            onChange={ (e) => this.setState({ email: e.target.value }) }
          />
        </label>
      </form>
    );
  }
}

export default Login;
