import React from 'react';
import { Link } from 'react-router-dom';
import './wallet.css';

class Wallet extends React.Component {
  render() {
    return (
      <div className="wallet">
        <h1>Pagina - TrybeWallet</h1>
        <Link to="/">
          <button className="wallet_butto" type="button">voltar</button>
        </Link>
      </div>
    );
  }
}

export default Wallet;
