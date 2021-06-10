import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import FormAddDespesas from '../components/FormAddDespesas';
import TabelaGastos from '../components/TabelaGastos';

class Wallet extends React.Component {
  render() {
    const { edit } = this.props;
    return (
      <div>
        <Header />
        <FormAddDespesas key={ edit } />
        <TabelaGastos />
      </div>
    );
  }
}

const mapStateToProps = ({ wallet }) => ({
  edit: wallet.edit,
});

Wallet.propTypes = {
  edit: PropTypes.bool,
}.isRequired;

export default connect(mapStateToProps)(Wallet);
