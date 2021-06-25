import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Form from '../components/Form';
import Table from '../components/Table';
import { requestAPI } from '../actions';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.sumTotalExpenses = this.sumTotalExpenses.bind(this);
  }

  sumTotalExpenses() {
    const { totalExpenses } = this.props;
    console.log(totalExpenses);
    let sum = 0;
    totalExpenses.forEach((expense) => {
      sum += (expense.value * expense.exchangeRates[expense.currency].ask);
    });
    return sum.toFixed(2);
  }

  render() {
    const { userEmail } = this.props;
    return (
      <div>
        <header>
          <p data-testid="email-field">{ userEmail }</p>
          <p data-testid="total-field">
            {this.sumTotalExpenses()}
          </p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
        <Form />
        <Table />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  totalExpenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  getApi: () => dispatch(requestAPI()),
});

Wallet.propTypes = {
  userEmail: PropTypes.string.isRequired,
  totalExpenses: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

// REFS:
// https://github.com/tryber/sd-09-project-trybewallet/pull/62   PR-COLEGA
// https://github.com/tryber/sd-010-a-project-trybewallet/pull/27  PR-COLEGA
// https://www.digitalocean.com/community/tutorials/redux-redux-thunk-pt
// https://redux.js.org/tutorials/essentials/part-5-async-logic
// https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/table
