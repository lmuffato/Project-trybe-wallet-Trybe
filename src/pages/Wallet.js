import React from 'react';
import Header from './Header';
import Valor from './Form/Valor';
import MetodoPagamento from './Form/MetodoPagamento';
import Moeda from './Form/Moeda';
import Tag from './Form/Tag';
import Descricao from './Form/Descricao';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <form>
          <Valor />
          <Moeda />
          <MetodoPagamento />
          <Tag />
          <Descricao />
          <button type="submit">Adicionar Despesa</button>
        </form>
      </>
    );
  }
}

export default Wallet;
