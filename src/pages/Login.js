import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { login } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      email: e.target.value,
    });
  }

  render() {
    const { email } = this.state;
    const { sendEmail } = this.props;
    return (
      <div>
        <h3>Enter Email and Password</h3>
        <input
          type="email"
          data-testid="email-input"
          placeholder="Email"
          onChange={ this.handleChange }
        />
        <input
          type="password"
          data-testid="password-input"
          placeholder="PassWord"
        />
        <Link to="/carteira">
          <button
            onClick={ () => sendEmail({ email }) }
            type="button"
            // disabled

          >
            Entrar
          </button>
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  sendEmail: (payload) => dispatch(login(payload)),
});

Login.propTypes = {
  sendEmail: PropTypes.string.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
