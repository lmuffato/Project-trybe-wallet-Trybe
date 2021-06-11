import React from 'react';
// import { connect } from 'react-redux';
import Header from '../components/Header';
import Forms from '../components/Forms';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Forms />
      </>
    );
  }
}

// const mapStateToProps = (state) => ({
//   currencies: state.wallet.currencies,
//   email: state.user.email,
// });

// export default connect(mapStateToProps, null)(Wallet);
export default Wallet;
