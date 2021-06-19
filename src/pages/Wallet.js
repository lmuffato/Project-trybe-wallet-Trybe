import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Expenses from '../components/Expenses';
import Description from '../components/Description';
import Currency from '../components/Currency';
import PaymentMethod from '../components/PaymentMethod';
import Tags from '../components/Tags';
import { apiCurrency } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { fetchApi } = this.props;
    fetchApi();
  }

  render() {
    return (
      <div>
        <Header />
        <form>
          <Expenses />
          <Description />
          <Currency />
          <PaymentMethod />
          <Tags />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchApi: () => dispatch(apiCurrency()),
});

Wallet.propTypes = {
  fetchApi: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Wallet);
