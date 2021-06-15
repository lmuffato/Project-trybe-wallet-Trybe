import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { ThunkAPI } from '../actions/wallet';

import Header from '../components/Header';
import Form from '../components/Form';
import Table from '../components/Table';

class Wallet extends React.Component {
  componentDidMount() {
    const { ThunkAPIDispatch } = this.props;
    ThunkAPIDispatch();
    // chamo/executo a função thunk, e é aqui que começa de fato chamada da api
  }

  render() {
    return (
      <section>
        <Header />
        <Form />
        <Table />
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  ThunkAPIDispatch: () => dispatch(ThunkAPI()),
});
// uso o mapDispatchToProps pois estou usando uma action para passar uma inforção para o reducer e estado global,
// nesse caso a action é uma função e a informação é a chamada dessa função que ira encadear com a chamada da api e o dispatch de outra actions
// como a atction que guarda a informação da api dentro do estado global em wallet.currencies

Wallet.propTypes = {
  ThunkAPIDispatch: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Wallet);
