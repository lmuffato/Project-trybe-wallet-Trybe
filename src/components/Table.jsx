import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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
    const { getInfo } = this.props;
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
              <button type="button">EXCLUIR</button>
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

Table.propTypes = {
  getInfo: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapToStateToProps)(Table);
