import React from 'react';
import PropTypes from 'prop-types';

class FormsSelect extends React.Component {
  render() {
    const { onChange, currencies, onClick } = this.props;
    return (
      <>
        <label htmlFor="input-moeda">
          Moeda
          <select id="input-moeda" name="currency" onChange={ onChange }>
            { currencies.map((currencie) => (
              <option
                key={ currencie }
              >
                { currencie }
              </option>
            )) }
          </select>
        </label>
        <label htmlFor="input-pagamento">
          Método de pagamento
          <select id="input-pagamento" name="method" onChange={ onChange }>
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="input-categoria">
          Tag
          <select id="input-categoria" name="tag" onChange={ onChange }>
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <button type="button" onClick={ onClick }>Adicionar Despesa</button>
      </>
    );
  }
}

FormsSelect.propTypes = {
  onChange: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default FormsSelect;
