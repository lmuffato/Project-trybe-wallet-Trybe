import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { typedPassword, typedEmail } from '../actions/index';

class Login extends React.Component {
  render() {
    /*
      // componenetDidUpdate ?????
      const inputEmail =
      const inputPassW =
      const buttonLogin =
      {inputEmail.contains '@' && inputPassW.lenght >= 6) ? { buttonLogin: Enable } : { buttonLogin: Disable }};
      */
    const { userTypedEmail, userTypedPassword } = this.props;
    return (
      <section>
        <form>
          <div>Login</div>
          <label htmlFor="user-email">
            <input
              data-testid="email-input"
              placeholder="nome@email.com"
              id="user-email"
              type="email"
              value={ userTypedEmail }
              // onChange=
            />
          </label>

          <label htmlFor="user-passw">
            <input
              data-testid="password-input"
              placeholder="nome@email.com"
              id="user-passw"
              type="text"
              value={ userTypedPassword }
              // onChange=
            />
          </label>
          <button type="button" data-testid="edit-btn"> Entrar</button>
          { /* Add LINK p /carteira ao click btn & dispatch action p salvar email
          onClick={() => saveUser(typedEmail)}
          */ }
        </form>
      </section>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  typedEmail: (userTypedEmail) => dispatch(typedEmail(userTypedEmail)),
  typedPassword: (userTypedPassword) => dispatch(typedPassword(userTypedPassword)),
  // addUser: (typedEmail) => dispatch(saveUser(typedEmail)),
});
// é uma função que retorna um objeto = () => ({}); 2, recebe por parametro o dispatch, define as actions que serao disparadas, recebendo via props
// vou passar a propriedade da action como chave, ela vai receber uma função, que tem como parametro user e ela disparada dispatch(actionCreator({ user })), e passa
// como parametro da actionCreator um parametro, o que deve ser adicionado, o payload

const mapStateToProps = (state) => ({
  typedEmail: state.user.email,
  typedPassword: state.user.password,
});

Login.propTypes = {
  user: PropTypes.shape({
    typedEmail: PropTypes.string,
    typedPassword: PropTypes.string,
  }),
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Login);
