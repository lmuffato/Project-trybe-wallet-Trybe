import React from 'react';
import { string } from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        <Header
          email={ email }
        />
      </div>
    );  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Wallet.propTypes = {
  email: string,
}.isRequired;

export default connect(mapStateToProps, null)(Wallet);