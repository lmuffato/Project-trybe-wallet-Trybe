import React from 'react';
// import { connect } from 'react-redux';
import './Wallet.css';
import Header from './Header';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container-wallet">
          <img className="img-wallet" src="https://3.bp.blogspot.com/-1bFMeU55Gj8/Ws-PZazG0mI/AAAAAAAARNo/vVUpBSap_PApo3meVsLf3mOx7Lk3u0SGgCEwYBhgL/s1600/005.gif" alt="wallet-meme" />
        </div>
      </div>
    );
  }
}

export default Wallet;
