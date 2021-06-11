import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Heading4 from '../components/Heading4';
import Form from '../components/Form';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      expenseMount: '0',
      coin: 'BRL',
    };
  }

  render() {
    const { email } = this.props;
    const { expenseMount, coin } = this.state;
    return (
      <div>
        <Heading4 dataTestid="email-field" text={ email } />
        <Heading4 dataTestid="total-field" text={ expenseMount } />
        <Heading4 dataTestid="header-currency-field" text={ coin } />
        <Form />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Wallet);
