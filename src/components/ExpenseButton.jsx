import React from 'react';

class ExpenseButton extends React.Component {
  render() {
    return (
      <section>
        <button
          className="add-expense-bttn"
          type="submit"
        >
          Adicionar Despesa
        </button>
      </section>
    );
  }
}

export default ExpenseButton;
