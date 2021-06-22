import React from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';

class Table extends React.Component {
  constructor() {
    super();
    this.getValue = this.getValue.bind(this);
    this.createTable = this.createTable.bind(this);
  }

  getValue(expense) {
    const value = expense.value * expense.exchangeRates[expense.currency].ask;
    const convertedValue = value.toFixed(2);
    return parseFloat(convertedValue);
  }

  createTable() {
    const { date } = this.props;
    console.log(date);
    return (
      date.map((expense) => (
        <tr key={ expense.id }>
          <td>{ expense.description }</td>
          <td>{ expense.tag }</td>
          <td>{ expense.method }</td>
          <td>{ expense.value }</td>
          <td>{ expense.exchangeRates[expense.currency].name }</td>
          <td>{ Math.round(expense.exchangeRates[expense.currency].ask * 100) / 100 }</td>
          <td>{this.getValue(expense)}</td>
          <td>Real</td>
          <td>
            <button type="submit" data-testid="delete-btn">Editar</button>
            <button type="submit" data-testid="delete-btn">Excluir</button>
          </td>
        </tr>
      ))
    );
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          { this.createTable() }
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({ // recebe o estado como props
  date: state.wallet.expenses,
});

Table.propTypes = {
  createTable: func,
}.isRequired;

export default connect(mapStateToProps, null)(Table);
