import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import Form from '../components/Form';
import Header from '../components/Header';
import { getCurrencyThunk } from '../actions';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    const { currencies } = this.props;

    this.state = { currencies };
  }

  componentDidMount() {
    const { getCurrencies } = this.props;

    getCurrencies();
  }

  render() {
    const { currencies } = this.state;

    return (
      <div>
        <Header />
        <Form currencies={ currencies } />
      </div>);
  }
}

Wallet.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  getCurrencies: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(getCurrencyThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
