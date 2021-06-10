import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeExpense } from '../../actions';

class Table extends React.Component {
  constructor(props) {
    super(props);

    this.state = ({
      headers: ['Descrição', 'Tag', 'Método de pagamento', 'Valor', 'Moeda',
        'Câmbio utilizado', 'Valor convertido', 'Moeda de conversão', 'Editar/Excluir'],
    });
  }

  generateDIsplayObj() {
    const { expenses } = this.props;

    if (expenses.length !== 0) {
      const values = expenses.map((expense) => {
        const descricao = expense.description;
        const { tag, method, id } = expense;
        const valor = Number(expense.value);
        const curr = expense.currency;
        const moeda = expense.exchangeRates[curr].name;
        const rate = (expense.exchangeRates[curr].ask);
        const taxa = Number(rate).toFixed(2);
        const converted = Number((valor * rate).toFixed(2));
        const currency = 'Real';
        return { descricao, tag, method, valor, moeda, taxa, converted, currency, id };
      });
      return values;
    } return [];
  }

  render() {
    const { headers } = this.state;
    const { removeItem } = this.props;

    const expenses = this.generateDIsplayObj();

    return (
      <table>
        <tr>
          {headers.map((header, key) => <th key={ key }>{ header }</th>)}
        </tr>
        {expenses.length > 0 && expenses.map((expense, key) => (
          <tr key={ key }>
            <td>{ expense.descricao }</td>
            <td>{ expense.tag }</td>
            <td>{ expense.method }</td>
            <td>{ expense.valor }</td>
            <td>{ expense.moeda }</td>
            <td>{ expense.taxa }</td>
            <td>{ expense.converted }</td>
            <td>{ expense.currency }</td>
            <td>
              <button
                type="button"
                data-testid="delete-btn"
                onClick={ () => removeItem(expense.id) }
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  removeItem: (id) => dispatch(removeExpense(id)),
});

Table.propTypes = {
  removeItem: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    value: PropTypes.string,
    description: PropTypes.string,
    currency: PropTypes.string,
    method: PropTypes.string,
    tag: PropTypes.string,
    exchangeRates: PropTypes.objectOf(PropTypes.objectOf(PropTypes.string)),
  })).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
