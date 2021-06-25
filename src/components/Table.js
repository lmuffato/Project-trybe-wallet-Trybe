import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { currencies, deleting } from '../actions';
import '../index.css';

class Table extends Component {
  constructor(props) {
    super(props);

    this.updateTable = this.updateTable.bind(this);
    this.deleteButton = this.deleteButton.bind(this);
  }

  componentDidMount() {
    this.updateTable();
  }

  deleteButton(e) {
    const { toDelete } = this.props;
    return (
      <button
        data-testid="delete-btn"
        type="button"
        onClick={ () => toDelete(e) }
      >
        Excluir
      </button>
    );
  }

  updateTable() {
    const { fromWallet } = this.props;
    return (
      <table className="tableHead">
        <thead>
          <tr>
            <th className="description">Descrição</th>
            <th className="value">Tag</th>
            <th className="description">Método de pagamento</th>
            <th className="value">Valor</th>
            <th className="description">Moeda</th>
            <th className="value">Câmbio utilizado</th>
            <th className="value">Valor convertido</th>
            <th className="description">Moeda de conversão</th>
          </tr>
        </thead>
        { fromWallet.map((e, i) => {
          const na = e.exchangeRates
            .find((ev) => ev[e.currency])[e.currency].name;
          const ca = e.exchangeRates
            .find((ev) => ev[e.currency])[e.currency].ask;
          const caConv = parseFloat(ca).toLocaleString('de');
          const magicN = -2;
          const val = (Math.round((e.value * 100), magicN) / 100).toLocaleString('de');
          const co = (parseFloat(val) * parseFloat(ca));
          return (
            <tbody key={ i }>
              <tr>
                <td>{e.description}</td>
                <td>{e.tag}</td>
                <td>{e.method}</td>
                <td>
                  {e.currency}
                  &nbsp;
                  {val}
                </td>
                <td>{na.split('/', 1)[0]}</td>
                <td>{caConv}</td>
                <td>{(Math.round((co * 100), magicN) / 100).toLocaleString('de')}</td>
                <td>Real Brasileiro</td>
                <td>{this.deleteButton([e.id, e.value])}</td>
              </tr>
            </tbody>
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
  toDelete: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
