import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../table.css';

class Expenses extends React.Component {
  constructor() {
    super();
    this.getSpends = this.getSpends.bind(this);
    this.renderSpends = this.renderSpends.bind(this);
    this.renderHead = this.renderHead.bind(this);
  }

  getSpends(expense) {
    return parseFloat((expense.value * expense.exchangeRates[expense.currency].ask)
      .toFixed(2));
  }

  renderHead() {
    return (
      <tr>
        <th>Id: </th>
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
    );
  }

  renderSpends() {
    const { spends } = this.props;
    return (
      spends.map((expense) => (
        <tr key={ expense.id }>
          <td>{ expense.id }</td>
          <td>{ expense.description }</td>
          <td>{ expense.tag }</td>
          <td>{ expense.method }</td>
          <td>{ expense.value }</td>
          <td>{ expense.exchangeRates[expense.currency].name }</td>
          <td>{ Number(expense.exchangeRates[expense.currency].ask).toFixed(2) }</td>
          <td>{this.getSpends(expense)}</td>
          <td>Real</td>
          <td>
            <button type="submit" data-testid="delete-btn">Editar</button>
            <button type="submit" data-testid="edit-btn">Excluir</button>
          </td>
        </tr>
      ))
    );
  }

  render() {
    return (
      <table>
        <thead>
          { this.renderHead() }
        </thead>
        <tbody>
          { this.renderSpends() }
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  spends: state.wallet.expenses,
});

Expenses.propTypes = {
  renderSpends: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, null)(Expenses);
