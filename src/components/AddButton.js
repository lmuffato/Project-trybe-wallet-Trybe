import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExpense as addExpenseAction } from '../actions';
import fetchCurrencies from '../services/currenciesApi';

class AddButton extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
    this.state = { id: 0 };
  }

  async handleClick() {
    const { expense, addExpense } = this.props;
    const { id } = this.state;
    addExpense({
      id,
      ...expense,
      exchangeRates: await fetchCurrencies(),
    });

    this.setState((prevId) => ({ id: prevId.id + 1 }));
  }

  render() {
    return (
      <div>
        <button
          type="button"
          onClick={ this.handleClick }
        >
          Adicionar Despesa
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addExpense: (obj) => dispatch(addExpenseAction(obj)),
});

const mapStateToProps = (state) => ({
  expensesList: state.wallet.expenses,
});

AddButton.propTypes = {
  expense: PropTypes.objectOf(PropTypes.shape({
    value: PropTypes.string,
    description: PropTypes.string,
    currency: PropTypes.string,
    payment: PropTypes.string,
    tag: PropTypes.string,
    exchangeRates: PropTypes.objectOf(PropTypes.string),
  })).isRequired,
  addExpense: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddButton);
