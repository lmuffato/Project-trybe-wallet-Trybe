import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Forms from '../components/Forms';
import Table from '../components/Table';
import Edit from '../components/Edit';

class Wallet extends React.Component {
  render() {
    const { edit } = this.props;
    return (
      <>
        <Header />
        { edit ? <Edit /> : <Forms />}
        <Table />
      </>
    );
  }
}

const mapStateToProps = ({ wallet: { edit } }) => ({ edit });

export default connect(mapStateToProps, null)(Wallet);

Wallet.propTypes = {
  edit: PropTypes.bool,
}.isRequired;
