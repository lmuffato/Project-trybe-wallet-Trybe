import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addNewUser } from '../actions';

class Routers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.checkRegistered = this.checkRegistered.bind(this);
  }

  checkRegistered() {
    const { email, password } = this.state;
    addNewUser({ email, password });
    this.setState({
      email: '',
      password: '',
    });
  }

  render() {
    const { password, email } = this.state;
    return (
      <div>
        <input
          type="email"
          placeholder="name@mail.com"
          data-testid="email-input"
          value={ email }
          onChange={ (event) => this.setState({ email: event.target.value }) }
        />
        <imput
          type="password"
          placeholder="Password"
          data-testid="password-input"
          value={ password }
          onChange={ (event) => this.setState({ password: event.target.value }) }
        />
        <button
          type="button"
          onClick={ this.checkRegistered }
        >
          Entrar
        </button>
        <Link to="/register">Clientes Registrados</Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addNewUser: (e) => dispatch(addNewUser(e)),
});

export default connect(null, mapDispatchToProps)(Routers);
