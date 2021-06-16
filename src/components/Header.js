import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/* Crie uma página para sua carteira com as seguintes características:
Crie um header para a página de carteira contendo as seguintes características:
Um elemento que exiba o email da pessoa usuária que fez login. /Linha 17/
Um campo com a despesa total gerada pela lista de gastos. /Linha 19/
Um campo que mostre qual câmbio está sendo utilizado, que será neste caso será 'BRL'. /Linha 21/
Desenvolva um formulário para adicionar uma despesa contendo as seguintes características:
Um campo para adicionar valor da despesa. /Linha 30/
Um campo de texto para adicionar a descrição da despesa. /Linha 34/
Um campo de select para adicionar em qual moeda será registrada a despesa. /Linha 38/
Um campo para adicionar qual método de pagamento será utilizado. /Linha 45/
Um campo para selecionar uma categoria (tag) para a despesa. /Linha 54/ */
/* Req 8: Os valores dos campos devem ser salvos no estado da aplicação, na chave expenses, dentro de um array contendo todos gastos que serão adicionados: /Linha 20/ */

class Header extends React.Component {
  sumExpenses() {
    const { expenses } = this.props;
    const expenseValues = expenses.map((expense) => {
      const spendCurrency = expense.currency;
      /* Req 8 - Você deverá salvar a cotação do câmbio feita no momento da adição para ter esse dado quando for efetuar uma edição do gasto. Caso você não tenha essa informação salva, o valor da cotação trazida poderá ser diferente do obtido anteriormente. */
      const currencyRate = expense.exchangeRates[spendCurrency].ask;
      const convertedValue = parseFloat(expense.value) * parseFloat(currencyRate);
      return convertedValue;
    });
    const totalSum = expenseValues.reduce((acc, cur) => acc + parseFloat(cur), 0);
    return totalSum;
  }

  render() {
    const { userData } = this.props;
    return (
      <div>
        <header>
          <h3>Email: </h3>
          <p data-testid="email-field">{userData}</p>
          <h3>Total de despesas: R$</h3>
          <p data-testid="total-field">
            {/* Req 8:
          Após adicionar a despesa, atualize a soma total das despesas.
          Essa informação deve ficar no header dentro do elemento com data-testid="total-field"
          */}
            {this.sumExpenses()}
          </p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userData: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  userData: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.array, PropTypes.func]))
    .isRequired,
};

export default connect(mapStateToProps)(Header);
