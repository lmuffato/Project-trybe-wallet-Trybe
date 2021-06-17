import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Table extends Component {
  render() {
    // console.log(this.props.expenses);
    const arr1 = ['Descrição', 'Tag', 'Método de pagamento', 'Valor', 'Moeda'];
    const arr2 = ['Câmbio utilizado', 'Valor convertido'];
    const tableHeader = [...arr1, ...arr2, 'Moeda de conversão', 'Editar/Excluir'];
    const { props: { expenses } } = this;
    return (
      <table>
        <tr>
          {tableHeader.map((head) => (
            <th key={ head }>
              {head}
            </th>))}
        </tr>
        { expenses.map((v, index) => (
          <tr key={ index * 100 }>
            <td key={ index }>{ v.description }</td>
            <td key={ index }>{ v.tag }</td>
            <td key={ index }>{ v.method }</td>
            <td key={ index }>{ v.value }</td>
            <td key={ index }>{ v.exchangeRates[v.currency].name.split('/')[0] }</td>
            <td key={ index }>
              { (Math
                .round(v.exchangeRates[v.currency].ask * 100) / 100) }
            </td>
            <td key={ index }>
              {(Math
                .round((Number(v.value) * v.exchangeRates[v.currency].ask) * 100) / 100) }
            </td>
            <td key={ index }>Real</td>
            <td key={ index }> botões </td>
          </tr>
        )) }
      </table>
    );
  }
}

Table.propTypes = {
  exchangeRates: PropTypes.shape({}).isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Table;
