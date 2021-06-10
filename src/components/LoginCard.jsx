import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addUser } from '../actions';

// Algumas partes desse componente eu consultei o PR do Victor Cantor: https://github.com/tryber/sd-010-a-project-trybewallet/pull/76
class LoginCard extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };

    this.checkInputs = this.checkInputs.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  checkInputs(email, password) {
    const regex = /^\w+([.-_]?\w+)*@\w+([.-_]?\w+)*(\.\w{2,3})+$/;
    const passLength = 6;
    const checkPass = password.length >= passLength;

    if (regex.test(email) && checkPass) {
      return false;
    }
    return true;
  }

  render() {
    const { email, password } = this.state;
    const disabled = this.checkInputs(email, password);
    const { addEmail } = this.props;
    return (
      <form>
        <input
          type="email"
          data-testid="email-input"
          name="email"
          onChange={ this.handleChange }
        />
        <input
          type="password"
          data-testid="password-input"
          name="password"
          onChange={ this.handleChange }
        />
        <Link to="/carteira">
          <button
            type="button"
            disabled={ disabled }
            onClick={ () => addEmail(email) }
          >
            Entrar
          </button>
        </Link>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addEmail: (email) => dispatch(addUser(email)),
});

LoginCard.propTypes = {
  addEmail: PropTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(LoginCard);
