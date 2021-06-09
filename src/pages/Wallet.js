import React from 'react';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    return <div>TrybeWallet</div>;
  }
}

// const mapStateToProps = (state) => ({
//   email: state.user.user.email,
// });
export default connect()(Wallet);
