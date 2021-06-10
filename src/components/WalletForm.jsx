import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCodesFromCoins } from '../services/api';

class WalletForm extends Component {
  constructor() {
    super();

    this.state = {
      moedas: [],
    };

    this.fetchApi = this.fetchApi.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  async fetchApi() {
    const moedas = await getCodesFromCoins();
    this.setState({
      moedas
    });
  };

  componentDidMount() {
    this.fetchApi();
  };

  render() {
    const { moedas } = this.state;
    const { 
      value,
      description,
      currency,
      method,
      tag,
    } = this.props;
    const { onSubmit, onChange } = this.props;
    return (
      <form
        onSubmit={(e) => onSubmit(e)}
      >
        <label>
          Valor
          <input
            type="text"
            name="value"
            value={ value }
            onChange={(e) => onChange(e)}
          />
        </label>
        <label>
          Descrição
          <input
            type="text"
            name="description"
            value={ description }
            onChange={(e) => onChange(e)}
          />
        </label>
        <label>
          Moeda
          <select
            name="currency"
            value={ currency }
            onChange={(e) => onChange(e)}
          >
            {moedas.map((moeda) => (
              <option value={ moeda } key={ moeda }>
                { moeda }
              </option>
            ))}
          </select>
        </label>
        <label>
          Método de pagamento
          <select
            name="method"
            value={ method }
            onChange={(e) => onChange(e)}
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label>
          Tag
          <select
            name="tag"
            value={ tag }
            onChange={(e) => onChange(e)}
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <button type="submit">
          Adicionar despesa
        </button>
      </form>
    );
  }
};

WalletForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
};

export default WalletForm;
