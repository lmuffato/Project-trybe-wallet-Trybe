import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getEmail } from '../actions/index';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailInput: '',
      password: '',
    };
    this.HandleEmail = this.HandleEmail.bind(this);
    this.HandlePass = this.HandlePass.bind(this);
    this.HandleValidate = this.HandleValidate.bind(this);
    this.EmailIsValide = this.EmailIsValid.bind(this);
  }

  HandleEmail(event) {
    this.setState({
      emailInput: event.target.value,
    });
  }

  HandlePass(event) {
    this.setState({
      password: event.target.value,
    });
  }

  EmailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  // validação do email tirado desse site https://ui.dev/validate-email-address-javascript/

  HandleValidate() {
    const { emailInput, password } = this.state;
    const number = 6;
    const validate = this.EmailIsValid(emailInput);
    if (password.length >= number && validate === true) {
      return false;
    }
    return true;
  }

  render() {
    const { emailInput } = this.state;
    const { firstDispatchGetEmail = 'abacate', history: { push } } = this.props;

    return (
      <form>
        <input
          type="email"
          placeholder="email"
          data-testid="email-input"
          onChange={ (event) => this.HandleEmail(event) }
        />
        <input
          type="password"
          placeholder="senha"
          data-testid="password-input"
          onChange={ (event) => this.HandlePass(event) }
        />
        <button
          type="button"
          disabled={ this.HandleValidate() }
          onClick={ () => {
            firstDispatchGetEmail(emailInput);
            push('/carteira');
            // uso essa função que está dentro do history para assim não precisar usar o Link do router e o botão ficar realmente desabilitado, fiz isso com ajuda do intrutor Gabriel
          } }
        >
          Entrar
          {/* <Link to="/carteira">Entrar</Link> */}
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  firstDispatchGetEmail: (email) => dispatch(getEmail(email)),
});

Login.propTypes = {
  firstDispatchGetEmail: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};

export default connect(null, mapDispatchToProps)(Login);
