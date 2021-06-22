import React from 'react';
import { connect } from 'react-redux';
import Form from '../components/forms';
import Header from '../components/header';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Form />
      </div>

    );
  }
}

const mapStateToProps = (state) => ({
  saveEmail: state.user.email,
});

export default connect(mapStateToProps)(Wallet);
