import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import AddForm from '../components/addform';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <AddForm />
      </main>
    );
  }
}

// const mapDispatchToProps = (dispatch) => ({
//   adicionaMoeda: () => dispatch(thunkApi()),
// });

const mapStateToProps = (state) => ({
  getEmail: state.user.email,
});

Wallet.propTypes = {
  getEmail: propTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Wallet);
