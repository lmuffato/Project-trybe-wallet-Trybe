import React from 'react';
// import { connect } from 'react-redux';
import Form from '../componentes/form';
import Header from '../componentes/header';
import Table from '../componentes/table';
// import { addGasto } from '../actions';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Form />
        <Table />
      </>
    );
  }
}
// const mapDispatchToProps = (dispatch) => ({
//   addGasto: (payload) => dispatch(addGasto(payload)),
// });

export default Wallet;

// connect(null, mapDispatchToProps
