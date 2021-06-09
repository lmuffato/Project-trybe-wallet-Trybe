import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import { user as loginAction } from '../actions/index';
import './Login.css';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    const { email, password } = this.state;
    const { user } = this.props;
    return (
      <div className="login-page">
        <div className="form">
          <img src="https://media.tenor.com/images/3ce11c29678815f9279e7e94dc808f2a/tenor.gif" width="150px" alt="walletMeme" />
          <h1>Trybe Wallet</h1>
          <form className="login-form">
            <input
              onChange={ (e) => this.setState({ email: e.target.value }) }
              type="text"
              placeholder="email"
              data-testid="email-input"
            />
            <input
              onChange={ (e) => this.setState({ password: e.target.value }) }
              type="password"
              placeholder="senha"
              data-testid="password-input"
            />
            <Link
              to="/wallet"
              onClick={ () => user({ email, password }) }
            >
              <button
                type="button"
              >
                Entrar
              </button>
            </Link>

          </form>
        </div>
      </div>
    );
  }
}

Login.propTypes = ({
  user: func,
}).isRequired;

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  user: (payload) => dispatch(loginAction(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
