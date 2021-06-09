import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { validEmail } from '../actions/index';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      // senha: '',
      btnDesabled: true,
    };

    this.hamdleChange = this.hamdleChange.bind(this);
  }

  hamdleChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
      btnDesabled: false,
    });
  }

  // const validatesActivationOfTheButton = () => {
  //   const { senha } = this.props;
  //   const valid = false;
  //   if ( senha >= 6) {
  //     valid = true;
  //   }
  //   return valid;
  // }

  render() {
    const { email, btnDesabled } = this.state;
    const { emailAction } = this.props;
    return (
      <div>
        <section>
          <input
            type="email"
            name="email"
            placeholder="email"
            data-testid="email-input"
            onChange={ this.hamdleChange }
          />
          <input
            type="password"
            name="senha"
            placeholder="senha"
            data-testid="password-input"
            min-length="6"
            onChange={ this.hamdleChange }
          />
          <div>
            <Link to="/carteira">
              <button
                type="button"
                disabled={ btnDesabled }
                onClick={ () => emailAction(email) }
              >
                Entrar
              </button>
            </Link>
          </div>
        </section>
      </div>
    );
  }
}

Login.propTypes = {
  emailAction: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  emailAction: (payload) => dispatch(validEmail(payload)),
});

export default connect(null, mapDispatchToProps)(Login);
