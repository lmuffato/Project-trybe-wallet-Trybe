import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { currencies } from '../actions';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };

    this.updateTable = this.updateTable.bind(this);
    this.qualquer = this.qualquer.bind(this);
  }

  qualquer() {
    const { wallet } = this.props;
    console.log(Object.entries(wallet));
    if (Object.entries(wallet) === []) {
      return undefined;
    }
    return (
      this.updateTable()
    );
  }

  updateTable() {
    const { wallet } = this.props;
    return (
      <table>
        <td>{wallet.value}</td>
        <td>{wallet.description}</td>
        <td>{wallet.currency}</td>
        <td>{wallet.tag}</td>
        <td>editar</td>
      </table>
    );
  }

  render() {
    return (
      <table>
        <th>Valor</th>
        <th>Descrição</th>
        <th>Moeda</th>
        <th>Categoria</th>
        { this.updateTable() }
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  wallet: state.wallet.expenses,
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  toCurrency: (payload) => dispatch(currencies(payload)),
});

Table.propTypes = {
  toCurrency: PropTypes.oneOf(
    PropTypes.number,
    PropTypes.array,
  ).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
