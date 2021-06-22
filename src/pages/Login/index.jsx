import React from 'react';
import { func, shape } from 'prop-types';
import { connect } from 'react-redux';
import { FiArrowRight } from 'react-icons/fi';

import { getUser } from '../../actions';

import Input from '../../components/Input';

import { Container, Logo, Button, LoginSection } from './styles';

class Login extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      email: '',
      password: '',
      isValidate: {
        email: false,
        password: false,
      },
    };
  }

  // https://www.horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/
  validateUser(value, isEmail) {
    const regex = /\S+@\S+\.\S+/;
    const minimumLength = 6;

    if (isEmail === 'email') return regex.test(value);
    return value.length >= minimumLength;
  }

  handleChange({ target: { name, value } }) {
    this.setState(({ isValidate }) => ({
      [name]: value,
      isValidate: {
        ...isValidate,
        [name]: this.validateUser(value, name),
      },
    }));
  }

  handleSubmit(event) {
    event.preventDefault();
    const { email, password } = this.state;
    const { dispatchUser, history } = this.props;

    dispatchUser({ email, password });
    this.setState({ email: '', password: '' });
    history.push('/carteira');
  }

  render() {
    const {
      email,
      password,
      isValidate: { email: isEmail, password: isPwd },
    } = this.state;

    return (
      <Container>
        <Logo />

        <LoginSection>
          <Input
            value={ email }
            dataTestid="email-input"
            name="email"
            onChange={ (event) => this.handleChange(event) }
            type="text"
            placeholder="Email"
          />

          <Input
            value={ password }
            dataTestid="password-input"
            name="password"
            onChange={ (event) => this.handleChange(event) }
            type="password"
            placeholder="Password"
          />

          <Button
            disabled={ !(isEmail && isPwd) }
            as="button"
            onClick={ (event) => this.handleSubmit(event) }
          >
            <span>ENTRAR</span>
            {' '}
            <FiArrowRight />
          </Button>
        </LoginSection>
      </Container>
    );
  }
}

Login.propTypes = {
  dispatchUser: func.isRequired,
  history: shape({
    push: func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchUser: (payload) => dispatch(getUser(payload)),
});

export default connect(null, mapDispatchToProps)(Login);
