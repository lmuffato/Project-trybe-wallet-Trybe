import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../styles/components/table.css';

import editIcon from '../assets/edit.svg';
import deleteIcon from '../assets/trash.svg';

class Table extends Component {
  renderTableItems() {
    const { expences } = this.props;

    if (expences.length >= 1) {
      const items = Object.values(expences).map((expence) => {
        const names = expence.exchangeRates[expence.currency].name.split('/');
        const currencyName = names[0];

        const { ask } = expence.exchangeRates[expence.currency];

        return (
          <tr key={ expence.id }>
            <td>{expence.description}</td>
            <td>{expence.tag}</td>
            <td>{expence.method}</td>
            <td>
              {Number(expence.value)}
            </td>
            <td>{currencyName}</td>
            <td>
              {Number(ask).toFixed(2)}
            </td>
            <td>
              {(expence.value * ask).toFixed(2)}
            </td>
            <td>Real</td>
            <td className="buttons">
              <button type="button" data-testid="edit-btn" className="edit">
                <img src={ editIcon } alt="Editar" />
              </button>
              <button type="button" data-testid="" className="del">
                <img src={ deleteIcon } alt="Deletar" />
              </button>
            </td>
          </tr>
        );
      });

      return items;
    }
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
          {this.renderTableItems()}
        </tbody>

      </table>
    );
  }
}

Table.propTypes = {
  expences: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
      tag: PropTypes.string,
      method: PropTypes.string,
      value: PropTypes.string,
      currency: PropTypes.string,
    }),
  ).isRequired,

};

export default Table;
