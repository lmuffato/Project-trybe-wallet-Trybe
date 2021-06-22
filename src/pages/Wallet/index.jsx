import React from 'react';
import { func, bool } from 'prop-types';
import { connect } from 'react-redux';

import { getCurrenciesThunk } from '../../actions';

import Loading from '../../components/Loading';
import Header from './components/Header';
import Forms from './components/Forms';

class Wallet extends React.Component {
  componentDidMount() {
    const { fetchData } = this.props;
    fetchData();
  }

  render() {
    const { isLoading } = this.props;

    return (
      <>
        <Header />
        {
          isLoading ? <Loading /> : <Forms />
        }
      </>
    );
  }
}

Wallet.propTypes = {
  fetchData: func.isRequired,
  isLoading: bool.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(getCurrenciesThunk()),
});

const mapStateToProps = (state) => ({
  isLoading: state.wallet.isLoading,
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
