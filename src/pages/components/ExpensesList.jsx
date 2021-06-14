import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class ExpensesList extends Component {
  render() {
    const { expensesProps } = this.props;
    return (
      <>
        <div role="row">
          <span role="columnheader">Descrição</span>
          <span role="columnheader">Tag</span>
          <span role="columnheader">Método de pagamento</span>
          <span role="columnheader">Valor</span>
          <span role="columnheader">Moeda</span>
          <span role="columnheader">Câmbio utilizado</span>
          <span role="columnheader">Valor convertido</span>
          <span role="columnheader">Moeda de conversão</span>
          <span role="columnheader">Editar/Excluir</span>
        </div>
        {expensesProps.map((expense) => {
          const name = expense.exchangeRates[expense.currency].name.split('/')[0];
          const roundedCurrency = Math
            .round(expense.exchangeRates[expense.currency].ask * 100) / 100;
          const convertedValue = expense
            .exchangeRates[expense.currency].ask * expense.value;
          return (
            <div key={ expense.id } role="row">
              <span role="cell">{ expense.description }</span>
              <span role="cell">{ expense.tag }</span>
              <span role="cell">{ expense.method }</span>
              <span role="cell">{ expense.value }</span>
              <span role="cell">{ name }</span>
              <span role="cell">{ roundedCurrency }</span>
              <span role="cell">{ convertedValue }</span>
              <span role="cell">Real</span>
              <button type="button">Editar</button>
              <button type="button">Excluir</button>
            </div>
          );
        })}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  expensesProps: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(ExpensesList);

ExpensesList.propTypes = {
  expensesProps: PropTypes.objectOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};
