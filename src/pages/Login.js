import React from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { login } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      senha: '',
    };
  }

  render() {
    const { email, senha } = this.state;
    // const { Login} = this.props;

    return (
      <div>
        <div>
          <input
            type="text"
            value={ email }
            placeholder="email"
            data-testid="email-input"
            onChange={ (event) => this.setState({ email: event.target.value }) }
          />
          <input
            type="password"
            value={ senha }
            placeholder="senha"
            data-testid="password-input"
            onChange={ (event) => this.setState({ senha: event.target.value }) }
          />
        </div>
        <Link
          to="/carteira"
          // onClick={ () => login({ email, senha }) }
        >
          <button type="button">Entrar</button>
        </Link>
      </div>
    );
  }
}

// const mapDispatchToProps = (dispatch) => ({
//   login: (payload) => dispatch(login(payload)),
// });

// export default connect(null, mapDispatchToProps)(Login);
export default Login;
