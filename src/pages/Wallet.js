import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../Components/Header';
import Form from '../Components/Form';
import Table from '../Components/table';
import { fetchCurrencies } from '../actions/wallet';

class Wallet extends React.Component {
  componentDidMount() {
    const { currencies } = this.props;
    currencies(); // enviando a action fetchMovies
  }

  render() {
    return (
      <div>
        trybewallet
        <Header />
        <Form />
        <Table />
      </div>
    );
  }
}

Wallet.propTypes = {
  currencies: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  currencies: () => dispatch(fetchCurrencies()) });

export default connect(null, mapDispatchToProps)(Wallet);
