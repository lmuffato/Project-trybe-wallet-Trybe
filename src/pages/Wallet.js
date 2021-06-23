import React from 'react';
import { connect } from 'react-redux';
import { addCurrencies } from '../actions';
import Form from '../components/forms';
import Header from '../components/header';

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

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
