import React, { Component } from 'react';
import { connect } from 'react-redux';

class Table extends Component {
  render() {
    const td = ['Descrição', 'Tag', 'Método de pagamento', 'Valor', 'Moeda',
      'Câmbio utilizado', 'Valor convertido', 'Moeda de conversão', 'Editar/Excluir'];
    const { getInfos } = this.props;
    console.log(getInfos);
    const array = [];
    getInfos.forEach((obj) => {
      const getName = obj.exchangeRates[obj.currency].name;
      const valorConvertido = (obj.exchangeRates[obj.currency].ask) * obj.value;
      console.log(valorConvertido);
      const nome = [obj.description, obj.tag, obj.method,
        obj.value, getName, valorConvertido.toFixed(2), 'Real'];
      array.push(nome);
    });
    console.log(array);
    return (
      <table>
        <tr>
          {td.map((campo, index) => <td key={ index }>{campo}</td>)}
        </tr>
        <tr>
          {array.map((obj, index) => <td key={ index }>{obj}</td>)}
        </tr>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  getInfos: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Table);
