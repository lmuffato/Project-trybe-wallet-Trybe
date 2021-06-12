import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Table extends Component {
  constructor() {
    super();
    this.getValues = this.getValues.bind(this);
  }

  getValues(info) {
    const getName = info.exchangeRates[info.currency].name.split('/')[0];
    const cambio = info.exchangeRates[info.currency].ask;
    const valorConvertido = cambio * info.value;
    return {
      getName,
      cambio,
      valorConvertido,
    };
  }

  render() {
    const campos = ['Descrição', 'Tag', 'Método de pagamento', 'Valor', 'Moeda',
      'Câmbio utilizado', 'Valor convertido', 'Moeda de conversão', 'Editar/Excluir'];
    const { getInfos } = this.props;
    console.log(getInfos);
    return (
      <table>
        <tr>
          {campos.map((campo, index) => <th key={ index }>{campo}</th>)}
        </tr>
        {getInfos.map((info) => (
          <tr key={ info.id }>
            <td>{info.description}</td>
            <td>{info.tag}</td>
            <td>{info.method}</td>
            <td>{Number(info.value)}</td>
            <td>{this.getValues(info).getName}</td>
            <td>{Number(this.getValues(info).cambio).toFixed(2)}</td>
            <td>{Number(this.getValues(info).valorConvertido).toFixed(2)}</td>
            <td>Real</td>
            <td>
              <button type="button">Editar</button>
              <button type="button">Excluir</button>
            </td>
          </tr>))}
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  getInfos: state.wallet.expenses,
});

Table.propTypes = {
  getInfos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, null)(Table);
