import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BiEdit } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';

export default class Expense extends Component {
  render() {
    const {
      expense: {
        description,
        tag,
        method,
        value,
        currencyName,
        exchange,
        convertedValue,
      },
    } = this.props;
    return (
      <tr>
        <td>{description}</td>
        <td>{tag}</td>
        <td>{method}</td>
        <td>{value}</td>
        <td>{currencyName}</td>
        <td>{parseFloat(exchange).toFixed(2)}</td>
        <td>{parseFloat(convertedValue).toFixed(2)}</td>
        <td>Real</td>
        <td>
          <div className="buttons-expense">
            <BiEdit />
            <AiFillDelete />
          </div>
        </td>
      </tr>
    );
  }
}

Expense.propTypes = {
  expense: PropTypes.shape({
    description: PropTypes.string,
    tag: PropTypes.string,
    method: PropTypes.string,
    value: PropTypes.string,
    currencyName: PropTypes.string,
    exchange: PropTypes.string,
    convertedValue: PropTypes.number,
    conversionCurrency: PropTypes.string,
  }).isRequired,
};
