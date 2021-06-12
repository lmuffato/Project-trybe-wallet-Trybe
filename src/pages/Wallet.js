import React from 'react';
// import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import store from '../store';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      currency: 'BRL',
      // isLoggedIn: true,
    };
  }

  componentDidMount() {
    // this.checkLogged();
  }

  // checkLogged = () => {
  //   const { user } = store.getState();
  //   if (user.email === '') {
  //     // alert('Usuário não logado!');
  //     this.setState({ isLoggedIn: false });
  //   }
  // };

  render() {
    const {
      //  wallet: { expenses },
      user: { email },
    } = this.props;
    const {
      total,
      currency,
      // isLoggedIn,
    } = this.state;
    // if (!isLoggedIn) {
    //   return <Redirect to="/" />;
    // }

    return (
      <section className="wallet-page">
        <header className="header-container">
          <div className="wallet-logo">CARTEIRA DO MINEIRO</div>
          <div className="user-summary">
            <span className="user-email" data-testid="email-field">
              {email || 'alguem@email.com'}
            </span>
            <span data-testid="total-field">
              {`Total gasto: RS ${total}`}
            </span>
            <span data-testid="header-currency-field">{currency}</span>
          </div>
        </header>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  wallet: state.wallet,
  user: state.user,
});

Wallet.propTypes = {
  wallet: PropTypes.shape({
    // expenses: PropTypes.shape({}),
  }),
  user: PropTypes.shape({}),
}.isRequired;

export default connect(mapStateToProps, null)(Wallet);
