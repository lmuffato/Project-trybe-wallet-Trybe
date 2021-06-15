import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import Form from '../components/Form';
import Header from '../components/Header';
// import { ThunkAPI } from '../actions';

// const TWO_SECONDS = 2000;
class Wallet extends React.Component {
  render() {
    // const { fetchApiCoin, APIContent } = this.props;
    return (
      <section>
        <div>TrybeWallet</div>
        <Header />
        <Form />
      </section>
    );
  }
}

export default Wallet;
