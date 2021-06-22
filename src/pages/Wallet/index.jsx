import React from 'react';

import { getCurrenciesThunk } from '../../actions';

import Header from './components/Header';
import Forms from './components/Forms';

class Wallet extends React.Component {
  componentDidMount() {
    getCurrenciesThunk();
    console.log('isWorking?');
  }

  render() {
    return (
      <>
        <Header />
        <Forms />
      </>
    );
  }
}

export default Wallet;
