import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from '../components/form';
import { currenciesRequestThunk } from '../actions/index';

class Wallet extends React.Component {
  componentDidMount() {
    const { requestCurrencies } = this.props;
    requestCurrencies();
  }

  render() {
    const { email } = this.props;
    return (
      <>
        <header>
          <p data-testid="email-field">{email}</p>
          <p data-testid="total-field">0</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
        <main>
          <Form />
        </main>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  requestCurrencies: () => dispatch(currenciesRequestThunk()),
});

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  requestCurrencies: PropTypes.func.isRequired,
};
