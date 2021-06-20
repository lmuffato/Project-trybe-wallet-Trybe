import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from '../components/Form';
import Header from '../components/Header';
import Table from '../components/Table';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    // const { values } = this.props;
    this.state = {
      expenseMount: 0,
      coin: 'BRL',
    };
  }

  render() {
    const { email } = this.props;
    const { expenseMount, coin } = this.state;
    return (
      <div>
        <Header email={ email } expenseMount={ expenseMount } coin={ coin } />
        <Form />
        <Table />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  values: state.wallet.expenses,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Wallet);
