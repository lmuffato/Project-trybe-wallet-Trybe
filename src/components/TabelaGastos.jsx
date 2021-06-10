import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class TabelaGastos extends React.Component {
  render() {
    const { expenses } = this.props;
    const descriptions = ['Descrição', 'Tag', 'Método de pagamento',
      'Valor', 'Moeda', 'Câmbio utilizado', 'Valor convertido', 'Moeda de conversão',
      'Editar/Excluir'];
    return (
      <div>
        <table border="2" cellSpacing="0px" cellPadding="5px">
          <thead>
            <tr>
              { descriptions.map((value) => <th key={ value }>{ value }</th>) }
            </tr>
          </thead>
          <tbody>
            {
              expenses.map((expense) => {
                const { description, tag, method,
                  value, currency, exchangeRates, id } = expense;
                const { name, ask } = exchangeRates[currency];
                return (
                  <tr key={ id }>
                    <td>{ description }</td>
                    <td>{ tag }</td>
                    <td>{ method }</td>
                    <td>{ value }</td>
                    <td>{ name }</td>
                    <td>{ (Number(ask)).toFixed(2) }</td>
                    <td>{ (Number(ask) * Number(value)).toFixed(2) }</td>
                    <td>Real</td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

TabelaGastos.propTypes = {
  expenses: PropTypes.arrayOf({}),
}.isRequired;

export default connect(mapStateToProps)(TabelaGastos);
