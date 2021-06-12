import React from 'react';
import { connect } from 'react-redux';
import { func, object } from 'prop-types';
import './Wallet.css';
import Header from './Header';
import { deleteExpense } from '../actions/index';

class Wallet extends React.Component {
  // função criada a partir do PR do Adelino Junior
  handleClickDelete(id) {
    const { deleteExpenses, expenses } = this.props;
    const filter = expenses.filter((expend) => expend.id !== id);
    const condicional = filter || [];
    deleteExpenses(condicional);
  }

  tableHead() {
    return (
      <thead>
        <tr className="thead">
          <th scope="col">Descrição</th>
          <th scope="col">Tag</th>
          <th scope="col">Método de pagamento</th>
          <th scope="col">Valor</th>
          <th scope="col">Moeda</th>
          <th scope="col">Câmbio utilizado</th>
          <th scope="col">Valor convertido</th>
          <th scope="col">Moeda de conversão</th>
          <th scope="col">Editar/Excluir</th>
        </tr>
      </thead>
    );
  }

  // função para renderizar os expenses baseada no pR do Adelino Junior. Fiz algumas alterações para se adequar ao meu código
  renderTableExpenses() {
    const { expenses } = this.props;
    if (expenses.length) {
      const element = expenses.map((despesa) => {
        const { description, currency, method, tag, value, exchangeRates, id } = despesa;
        const convertedValue = exchangeRates[currency].ask * Number(value);
        const priceAtual = Number(exchangeRates[currency].ask);
        return (
          <tbody key={ id } className="tbody">
            <tr>
              <td>{description}</td>
              <td>{tag}</td>
              <td>{method}</td>
              <td>{value}</td>
              <td>{exchangeRates[currency].name.split('/')[0]}</td>
              <td>{priceAtual.toFixed(2)}</td>
              <td>{convertedValue.toFixed(2)}</td>
              <td>Real</td>
              <td>
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic mixed styles example"
                >
                  <button
                    onClick={ () => this.handleClickEdit(id) }
                    data-testid="edit-btn"
                    type="button"
                    className="btn btn-warning edit-btn"
                  >
                    Editar
                  </button>
                  <button
                    onClick={ () => this.handleClickDelete(id) }
                    data-testid="delete-btn"
                    type="button"
                    className="btn btn-danger"
                  >
                    Deletar
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        );
      });
      return element;
    }
  }

  render() {
    const { expenses } = this.props;
    if (expenses.length === 0) {
      return (
        <div>
          <Header />
          <div className="container-wallet">
            <img className="img-wallet" src="https://3.bp.blogspot.com/-1bFMeU55Gj8/Ws-PZazG0mI/AAAAAAAARNo/vVUpBSap_PApo3meVsLf3mOx7Lk3u0SGgCEwYBhgL/s1600/005.gif" alt="wallet-meme" />
            <table className="legend-container table table-dark table-striped">
              {this.tableHead()}
              {this.renderTableExpenses()}
            </table>
          </div>
        </div>

      );
    }
    return (
      <div>
        <Header />
        <div className="container-wallet">
          <table className="legend-container table table-dark table-striped">
            {this.tableHead()}
            {this.renderTableExpenses()}
          </table>
        </div>
      </div>
    );
  }
}

Wallet.propTypes = {
  expenses: object,
  deleteExpense: func,
}.isRequired;

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteExpenses: (payload) => dispatch(deleteExpense(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
