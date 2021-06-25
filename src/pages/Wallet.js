import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addCurrencies } from '../actions';
import Form from '../components/forms';
import Header from '../components/header';
import Table from '../components/table';

class Wallet extends React.Component {
  componentDidMount() {
    const { fetchCurrencies } = this.props;
    fetchCurrencies();
  }

  render() {
    const { currencies } = this.props;
    return (
      <div>
        <Header />
        <Form currencies={ currencies } />
        <Table />
      </div>

    );
  }
}
const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrencies: () => dispatch(addCurrencies()),
});

Wallet.propTypes = {
  currencies: PropTypes.array,
  fetchCurrencies: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
