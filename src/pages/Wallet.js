import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import WalletForm from '../components/WalletForm';
import { fetchCoins } from '../actions';

class Wallet extends React.Component {
  constructor(_props) {
    super(_props);

    this.state = {
      initialValue: 0,
    };
  }

  componentDidMount() {
    const { getCoins } = this.props;
    getCoins();
  }

  render() {
    const { state: { initialValue }, props: { userEmail } } = this;
    return (
      <section>
        <header>
          <span data-testid="email-field">
            Email:
            {userEmail}
          </span>
          <span data-testid="total-field">
            Total:
            {initialValue}
          </span>
          <span data-testid="header-currency-field">Cambio: BRL</span>
        </header>
        <WalletForm />
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
});

const mapDispatchToProps = (dispatch) => ({
  getCoins: () => dispatch(fetchCoins()),
});

Wallet.propTypes = {
  userEmail: PropTypes.string.isRequired,
  getCoins: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
