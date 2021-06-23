import Proptypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import loginAction from './actions';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      disabledButton: true,
      validEmail: false,
      validPass: false,
      fieldEmail: '',
    };
  }

  handleChange({ target }) {
    const numberPass = 5;
    const regexEmail = /^\w+@\w+.com$/;
    const resultRegex = regexEmail.test(target.value);
    const { validEmail, validPass } = this.state;

    if (target.type === 'email') {
      this.setState({ fieldEmail: target.value });

      if (resultRegex === true) {
        this.setState((state) => ({ validEmail: !state.validEmail }));
      } else this.setState({ validEmail: false });
    }

    if (target.type === 'password') {
      if (target.value.length >= numberPass) {
        this.setState({ validPass: true });
      } else this.setState({ validPass: false });
    }

    if ((validEmail && validPass) === true) {
      this.setState({ disabledButton: false });
    } else this.setState({ disabledButton: true });
  }

  render() {
    const { disabledButton, fieldEmail } = this.state;
    const { fazerLogin } = this.props;
    return (
      <main>
        <section>
          <input
            id="email"
            type="email"
            placeholder="username"
            data-testid="email-input"
            required
            value={ fieldEmail }
            onChange={ (e) => this.handleChange(e) }
          />
          <input
            type="password"
            placeholder="password"
            data-testid="password-input"
            required
            onChange={ (e) => this.handleChange(e) }
          />
          <Link to="/carteira">
            <input
              type="button"
              value="Entrar"
              disabled={ disabledButton }
              onClick={ () => fazerLogin(fieldEmail) }
            />
          </Link>
        </section>
      </main>
    );
  }
}

App.propTypes = {
  fazerLogin: Proptypes.objectOf(),
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  fazerLogin: (state) => dispatch(loginAction(state)),
});

export default connect(null, mapDispatchToProps)(App);
