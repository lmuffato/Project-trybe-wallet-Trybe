import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteExpenses } from '../actions';

class Table extends React.Component {
  constructor() {
    super();
    this.getValues = this.getValues.bind(this);
  }

  getValues(info) {
    const moeda = info.exchangeRates[info.currency].name.split('/')[0];
    const cambio = info.exchangeRates[info.currency].ask;
    const getValue = cambio * info.value;
    return { moeda, cambio, getValue };
  }

  render() {
    const array = ['Descrição',
      'Tag',
      'Método de pagamento',
      'Valor',
      'Moeda',
      'Câmbio utilizado',
      'Valor convertido', 'Moeda de conversão', 'Editar/Excluir'];
    const { getInfo, deleteInfo } = this.props;
    console.log(getInfo);
    return (
      <table>
        <tr>
          {array.map((value, index) => <th key={ index }>{value}</th>)}
        </tr>
        {getInfo.map((info) => (
          <tr key={ info.id }>
            <td>{info.description}</td>
            <td>{info.tag}</td>
            <td>{info.method}</td>
            <td>{Number(info.value)}</td>
            <td>{this.getValues(info).moeda}</td>
            <td>{Number(this.getValues(info).cambio).toFixed(2)}</td>
            <td>{Number(this.getValues(info).getValue).toFixed(2)}</td>
            <td>Real</td>
            <td>
              <button type="button">EDITAR</button>
              <button
                type="button"
                data-testid="delete-btn"
                onClick={ () => deleteInfo(info) }
              >
                EXCLUIR
              </button>
            </td>
          </tr>
        ))}
      </table>
    );
  }
}

const mapToStateToProps = (state) => ({
  getInfo: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteInfo: (payload) => dispatch(deleteExpenses(payload)),
});

Table.propTypes = {
  getInfo: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteInfo: PropTypes.func.isRequired,
};

export default connect(mapToStateToProps, mapDispatchToProps)(Table);
