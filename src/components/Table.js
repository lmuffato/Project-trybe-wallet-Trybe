import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { excludeAction } from '../actions';

class WalletTable extends React.Component {
  constructor() {
    super();
    this.handleButton = this.handleButton.bind(this);
  }

  handleValues(element) {
    const value = Number(element.value);
    const currence = Number(element.exchangeRates[element.currency].ask);
    const total = Number((value * currence).toFixed(2));
    return total;
  }

  handleButton(event) {
    const { id } = event.target;
    const { exclude } = this.props;
    exclude(id);
  }

  render() {
    const { wallet: { expenses } } = this.props;
    return (
      <div>
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
            {expenses.map((element) => {
              const value = this.handleValues(element);
              const rate = Number(element.exchangeRates[element.currency].ask);
              return (
                <tr key={ element.id }>
                  <td>{element.description}</td>
                  <td>{element.tag}</td>
                  <td>{element.method}</td>
                  <td>{element.value}</td>
                  <td>{element.exchangeRates[element.currency].name.split('/')[0]}</td>
                  <td>{rate.toFixed(2)}</td>
                  <td>{value}</td>
                  <td>Real</td>
                  <td>
                    <button
                      id={ element.id }
                      onClick={ this.handleButton }
                      type="button"
                      data-testid="delete-btn"
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  wallet: state.wallet,
});

const mapDispatchToProps = (dispatch) => ({
  exclude: (str) => dispatch(excludeAction(str)),
});

WalletTable.propTypes = {
  wallet: PropTypes.shape({
    expenses: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  exclude: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletTable);
