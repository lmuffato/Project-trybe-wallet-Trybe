import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { currencies, deleting } from '../actions';

class Table extends Component {
  constructor(props) {
    super(props);

    this.updateTable = this.updateTable.bind(this);
  }

  componentDidMount() {
    this.updateTable();
  }

  updateTable() {
    const { fromWallet, toDelete } = this.props;
    return (
      <table>
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
        </tr>
        { fromWallet.map((e, i) => {
          const na = e.exchangeRates
            .find((ev) => ev[e.currency])[e.currency].name.toUpperCase().split('/', 1)[0];
          const ca = e.exchangeRates
            .find((ev) => ev[e.currency])[e.currency].ask;
          const caConv = parseFloat(ca).toLocaleString('de');
          const magicN = -2;
          const val = (Math.round((e.value * 100), magicN) / 100).toLocaleString('de');
          const co = (parseFloat(val) * parseFloat(ca));
          return (
            <tr key={ i }>
              <td>{e.description}</td>
              <td>{e.tag}</td>
              <td>{e.method}</td>
              <td>
                {e.currency}
                &nbsp;
                {val}
              </td>
              <td>{na}</td>
              <td>{caConv}</td>
              <td>{(Math.round((co * 100), magicN) / 100).toLocaleString('de')}</td>
              <td>Real Brasileiro</td>
              <td>
                <button type="button" onClick={ () => toDelete() }>
                  Excluir
                </button>
              </td>
            </tr>
          );
        }) }
      </table>
    );
  }

  render() {
    return (
      <>
        { this.updateTable() }
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  fromWallet: state.wallet.expenses,
  fromCurrencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  toCurrency: (payload) => dispatch(currencies(payload)),
  toDelete: (payload) => dispatch(deleting(payload)),
});

Table.propTypes = {
  fromWallet: PropTypes.arrayOf(PropTypes.object).isRequired,
  toDelete: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
