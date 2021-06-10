import React from 'react';
import { connect } from 'react-redux';
import { addUser } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
    };

    this.changleChange = this.changleChange.bind(this);
  }

  changleChange(event) {
    this.setState({ email: event.target.value });
  }

  render() {
    const { email } = this.state;
    console.log(email);
    return (
      <div>
        login
        <form>
          <label htmlFor="e-mail">
            E-mail:
            <input
              type="text"
              data-testid="email-input"
              name="email"
              onChange={ this.changleChange }
            />
            <input type="text" data-testid="password-input" name="email" />
          </label>
          <button type="submit">Entrar</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getEmail: (state) => dispatch(addUser(state)),
});

export default connect(null, mapDispatchToProps)(Login);
