import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Table extends React.Component {
  currencyName() {
    const { expenses } = this.props;
    const curName = expenses.map((expense) => {
      const spendCurrency = expense.currency;
      const currencyName = expense.exchangeRates[spendCurrency].name;
      const strNumber = -16;
      const newString = currencyName.slice(0, strNumber);
      return newString;
    });
    return curName;
  }

  render() {
    const { expenses } = this.props;
    console.log(expenses);
    console.log(this.currencyName());
    return (
      <>
        <header className="table-header">
          <p>Descrição</p>
          <p>Tag</p>
          <p>Método de pagamento</p>
          <p>Valor</p>
          <p>Moeda</p>
          <p>Câmbio Utilizado</p>
          <p>Valor convertido</p>
          <p>Moeda de conversão</p>
          <p>Editar/Excluir</p>
        </header>
        <form>
          <p>{expenses.description}</p>
          <p>{expenses.tag}</p>
          <p>{expenses.method}</p>

        </form>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Table.propTypes = {
  expenses: PropTypes.array,
}.isRequired;

export default connect(mapStateToProps, null)(Table);
