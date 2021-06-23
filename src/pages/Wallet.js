import React from 'react';

class Wallet extends React.Component {
  constructor() {
    super();
    this.formCurrency = this.formCurrency.bind(this);
    this.headerCurrency = this.headerCurrency.bind(this);
  }

  headerCurrency() {
    return (
      <header>
        <aside>
          <p>
            Email:&nbsp;
            <strong
              data-testid="email-field"
            >
              email da pessoa aqui via estado global
            </strong>
          </p>
          <p>
            Despesa Total:&nbsp;
            <strong
              data-testid="total-field"
            >
              0
              {/* despesa total aqui via estado global */}
            </strong>
            <strong
              data-testid="header-currency-field"
            >
              &nbsp;BRL
            </strong>
          </p>
        </aside>
      </header>
    );
  }

  formCurrency() {
    return (
      <form>
        <label htmlFor="valor">
          Valor:&nbsp;
          <input type="number" id="valor" name="valor" />
        </label>
        <label htmlFor="descricao">
          Descrição:&nbsp;
          <input tiype="text" id="descricao" name="descricao" />
        </label>
        <label htmlFor="moeda">
          Moeda:&nbsp;
          <select id="moeda">
            {/* fazer um map recebendo via estado global as opções */}
          </select>
        </label>
        <label htmlFor="metodoPagamento">
          Método de Pagamento:&nbsp;
          <select id="metodoPagamento">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select id="tag" name="tag">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <input
          type="button"
          value="Adicionar despesa"
        />
      </form>
    );
  }

  render() {
    return (
      <>
        { this.headerCurrency() }
        <section>
          { this.formCurrency() }
          <table>
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
          </table>
          <button
            type="button"
            data-testid="delete-btn"
          >
            Deletar
          </button>
        </section>
      </>
    );
  }
}

export default Wallet;
