import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteExpense } from '../../actions';

class ExpensesCard extends React.Component {
  constructor(props) {
    super(props);

    this.generateTbody = this.generateTbody.bind(this);
  }

  generateThead() {
    const arrayThead = [
      'Descrição',
      'Tag',
      'Método de pagamento',
      'Valor',
      'Moeda',
      'Câmbio utilizado',
      'Valor convertido',
      'Moeda de conversão',
      'Editar/Excluir',
    ];

    return (
      <tr>
        {arrayThead.map((element, index) => <th key={ index }>{ element }</th>)}
      </tr>
    );
  }

  currencyConvert(expense) {
    const convertionCurrency = (parseFloat(expense.exchangeRates[expense.currency].ask)
    * parseFloat(expense.value));
    return convertionCurrency.toFixed(2);
  }

  handleRemove(e, expense, removendoDespesa, expenses) {
    e.preventDefault();
    if (expenses.length !== 0) {
      const removeExp = [...expenses].filter((exp) => exp.id !== expense.id);
      removendoDespesa(removeExp);
    }
  }

  generateTbody() {
    const { expenses, deleteCard } = this.props;
    return (
      expenses.map(
        (expense) => (
          <tr key={ expense.id }>
            <td>{expense.description}</td>
            <td>{expense.tag}</td>
            <td>{expense.method}</td>
            <td>{expense.value}</td>
            <td>{expense.exchangeRates[expense.currency].name.split('/')[0]}</td>
            <td>
              {parseFloat(expense.exchangeRates[expense.currency].ask).toFixed(2)}
            </td>
            <td>{this.currencyConvert(expense)}</td>
            <td>Real</td>
            <td id={ expense.id }>
              <button type="button">Editar</button>
              <button
                type="button"
                data-testid="delete-btn"
                onClick={ (e) => this.handleRemove(e, expense, deleteCard, expenses) }
              >
                Excluir
              </button>
            </td>
          </tr>
        ),
      )
    );
  }

  render() {
    const { expenses, deleteCard } = this.props;

    return (
      <table>
        <thead>
          {this.generateThead()}
        </thead>
        <tbody>
          {this.generateTbody(expenses, deleteCard)}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteCard: (despesas) => dispatch(deleteExpense(despesas)),
});

ExpensesCard.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object),
  deleteCard: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesCard);
