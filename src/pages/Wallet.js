import React from 'react';
import Header from './Header';
import Expenses from './Expenses';
import Valor from './Form/Valor';
import Moeda from './Form/Moeda';
import Descricao from './Form/Descricao';
import MetodoPagamento from './Form/MetodoPagamento';
import Tag from './Form/Tag';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <hr />
        <form>
          <Valor />
          <Moeda />
          <MetodoPagamento />
          <Tag />
          <Descricao />
          <button type="submit">Adicionar Despesa</button>
        </form>
        <Expenses />
      </>
    );
  }
}

export default Wallet;
