import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExpenses } from '../actions/index';

class AddExpenseButton extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     id
  //   };
  //   this.emailValidation = this.emailValidation.bind(this);
  // }

  render() {
    const {
      actualexpenses,
      inputExpenses,
      actualId,
      actualValue,
      actualDescription,
      actualCurrency,
      actualmethod,
      actualtag,
      actualRates,
    } = this.props;
    console.log(actualexpenses);
    return (
      <div>
        <button
          id="bnt-AddExpense"
          type="button"
          onClick={ () => {
            inputExpenses({
              id: actualId,
              value: actualValue,
              description: actualDescription,
              currency: actualCurrency,
              method: actualmethod,
              tag: actualtag,
              exchangeRates: actualRates,
            });
          } }
        >
          Adicionar despesa
        </button>
        <label htmlFor="valuetest">
          DESPESA TESTE
          <input
            id="valuetest"
            type="number"
            name="value"
            step="0.1"
            onChange={ (event) => { inputExpenses(event.target.value); } }
          />
        </label>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  actualexpenses: state.wallet.expenses,
  actualId: state.wallet.id,
  actualValue: state.wallet.value,
  actualDescription: state.wallet.description,
  actualCurrency: state.wallet.currency,
  actualmethod: state.wallet.method,
  actualtag: state.wallet.tag,
  actualRates: state.wallet2.exchangeRates,
});

const mapDispatchToProps = (dispatch) => ({
  inputExpenses: (expenses) => dispatch(addExpenses(expenses)),
});

AddExpenseButton.propTypes = {
  actualexpenses: PropTypes.objectOf(PropTypes.shape({
    actualId: PropTypes.string.isRequired,
    actualValue: PropTypes.string.isRequired,
    actualDescription: PropTypes.string.isRequired,
    actualCurrency: PropTypes.string.isRequired,
    actualmethod: PropTypes.string.isRequired,
    actualtag: PropTypes.string.isRequired,
    actualRates: PropTypes.objectOf().isRequired,
  })).isRequired,
  inputExpenses: PropTypes.func.isRequired,
  actualId: PropTypes.string.isRequired,
  actualValue: PropTypes.string.isRequired,
  actualDescription: PropTypes.string.isRequired,
  actualCurrency: PropTypes.string.isRequired,
  actualmethod: PropTypes.string.isRequired,
  actualtag: PropTypes.string.isRequired,
  actualRates: PropTypes.objectOf().isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddExpenseButton);
