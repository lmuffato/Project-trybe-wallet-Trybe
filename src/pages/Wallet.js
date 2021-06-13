import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Form from '../components/Form';
import Header from '../components/Header';

import { addExpence, getCurrencyThunk } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    // const { history } = this.props;
    // const { email } = this.state;

    // if (!email) {
    //   history.push('/');
    // }

    const { getCurrencies } = this.props;

    getCurrencies();
  }

  render() {
    const { currencies } = this.props;
    // const { addExpences } = this.props;

    return (
      <div>
        <Header />
        <Form currencies={ currencies } addExpence={ () => {} } />
      </div>);
  }
}

Wallet.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  getCurrencies: PropTypes.func.isRequired,
  // addExpences: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};

Wallet.defaultProps = {
  history: { push: () => {} },
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  email: state.user.email,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(getCurrencyThunk()),
  addExpences: (payload) => dispatch(addExpence(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
