import React, { Component } from 'react';
import PropTypes from 'prop-types';

const methods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];

const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

class WalletForm extends Component {
  render() {
    const {
      currencies, value, currence, method, tag, description, onChange, onSubmit,
    } = this.props;
    return (
      <div>
        <form onSubmit={ onSubmit }>
          <label htmlFor="value">
            Valor
            <input
              type="number"
              name="value"
              value={ value }
              onChange={ onChange }
            />
          </label>
          <label htmlFor="description">
            Descrição
            <input
              value={ description }
              onChange={ onChange }
              name="description"
              type="text"
            />
          </label>
          <label htmlFor="currence">
            Moeda
            <select name="currence" value={ currence } onChange={ onChange }>
              {currencies.map((element) => <option key={ element }>{element}</option>)}
            </select>
          </label>
          <label htmlFor="method">
            Método de pagamento
            <select name="method" value={ method } onChange={ onChange }>
              {methods.map((element) => <option key={ element }>{element}</option>)}
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select name="tag" value={ tag } onChange={ onChange }>
              {tags.map((element) => <option key={ element }>{element}</option>)}
            </select>
          </label>
          <button type="submit">Adicionar</button>
        </form>
      </div>
    );
  }
}

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string),
  value: PropTypes.string,
  currence: PropTypes.string,
  method: PropTypes.string,
  tag: PropTypes.string,
  description: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default WalletForm;
