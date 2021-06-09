import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '',
    };
  }

  render() {
    const { email, senha } = this.state;
    return (
      <div>
        <div>
          <input
            data-testid="email-input"
            type="text"
            onChange={ (v) => this.setState({ email: v.target.value }) }
            placeholder="email"
          />
          <input
            data-testid="password-input"
            type="password"
            onChange={ (v) => this.setState({ senha: v.target.value }) }
            placeholder="senha"
          />
        </div>
        <button
          type="button"
        >
          Entrar
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (v) => dispatch(login(v)),
});

export default connect(null, mapDispatchToProps)(Login);
