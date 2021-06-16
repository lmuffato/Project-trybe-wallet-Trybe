import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addNewUser as addNewUserAction } from '../actions/index';

class Login extends React.Component {
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
    const { addNewUser } = this.props;
    // const mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
    // const maxLen = 6;
    addNewUser({ email, password });
    // if (email.match(mailformat) && password.length <= maxLen) {
    // } else {
    //  return undefined;
    // }
    this.setState({
      email: '',
      password: '',
    });
  }

  render() {
    const { password, email } = this.state;
    return (
      <form>
        <input
          type="email"
          placeholder="name@mail.com"
          data-testid="email-input"
          value={ email }
          onChange={ (event) => this.setState({ email: event.target.value }) }
        />
        <input
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
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addNewUser: (e) => dispatch(addNewUserAction(e)),
});

Login.propTypes = {
  addNewUser: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);

/* References
https://www.edureka.co/blog/javascript-email-validation/
https://stackoverflow.com/questions/39740832/password-validation-is-at-least-6-character/39874275
*/
