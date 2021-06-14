import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Expenses from '../component/Expenses';
import Header from '../component/Header';
import { getApiThunk } from '../actions/index';

class Wallet extends React.Component {
  componentDidMount() {
    const { upDate } = this.props;
    upDate();
  }

  render() {
    const { currencies } = this.props;
    return (
      <>
        <Header />
        <Expenses currencies={ currencies } />
      </>
    );
  }
}

Wallet.propTypes = {
  upDate: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf([]).isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  upDate: () => dispatch(getApiThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
