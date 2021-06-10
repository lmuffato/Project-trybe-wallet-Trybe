import React from 'react';
import PropTypes from 'prop-types';

class Table extends React.Component {
  constructor(props) {
    super(props);

    this.buttonCreator = this.buttonCreator.bind(this);
  }

  buttonCreator(func, id) {
    return (
      <td>
        <button
          type="button"
          data-testid="delete-btn"
          onClick={ () => func(id) }
        >
          Apagar
        </button>
      </td>
    );
  }

  render() {
    const { expenses, onClick } = this.props;
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
          {
            expenses.map((expense, index) => (
              <tr key={ index }>
                <td>{expense.description}</td>
                <td>{expense.tag}</td>
                <td>{expense.method}</td>
                <td>{expense.value}</td>
                <td>{(expense.exchangeRates[expense.currency].name).split('/')[0]}</td>
                <td>
                  {
                    `${parseFloat(expense
                      .exchangeRates[expense.currency].ask).toFixed(2)}`
                  }
                </td>
                <td>
                  {
                    `${parseFloat(expense.value * expense
                      .exchangeRates[expense.currency].ask)
                      .toFixed(2)
                    }`
                  }
                </td>
                <td>Real</td>
                { this.buttonCreator(onClick, expense.id) }
              </tr>
            ))
          }
        </tbody>
      </table>
    );
  }
}
// Forma mais flexível de exibir a moeda destino
// (expense.exchangeRates[expense.currency].name).split('/')[1]

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object),
  onClick: PropTypes.func,
}.isRequeired;

export default Table;
