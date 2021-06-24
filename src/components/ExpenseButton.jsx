import React from 'react';
import PropTypes from 'prop-types';

class ExpenseButton extends React.Component {
  render() {
    const { onClick } = this.props;
    return (
      <section>
        <button
          onClick={ onClick }
          className="add-expense-bttn"
          type="submit"
        >
          Adicionar Despesa
        </button>
      </section>
    );
  }
}

ExpenseButton.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default ExpenseButton;
