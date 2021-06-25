import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCodesFromCoins } from '../services/api';
import FormSelects from './Form/Select';

class WalletForm extends Component {
  constructor() {
    super();

    this.state = {
      moedas: [],
    };

    this.fetchApi = this.fetchApi.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    this.fetchApi();
  }

  async fetchApi() {
    const moedas = await getCodesFromCoins();
    this.setState({
      moedas,
    });
  }

  render() {
    const { moedas } = this.state;
    const { value, description, currency, method, tag } = this.props;
    const { onSubmit, onChange } = this.props;
    return (
      <form
        onSubmit={ (e) => onSubmit(e) }
      >
        <label htmlFor="value">
          Valor
          <input
            id="value"
            name="value"
            value={ value }
            onChange={ (e) => onChange(e) }
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            id="description"
            name="description"
            value={ description }
            onChange={ (e) => onChange(e) }
          />
        </label>
        <label htmlFor="currency">
          Moeda
          <select
            id="currency"
            name="currency"
            value={ currency }
            onChange={ (e) => onChange(e) }
          >
            {moedas.map((moeda) => (
              <option value={ moeda } key={ moeda }>
                { moeda }
              </option>
            ))}
          </select>
        </label>
        <FormSelects
          method={ method }
          tag={ tag }
          onChange={ (e) => onChange(e) }
        />
        <button type="submit"> Adicionar despesa </button>
      </form>
    );
  }
}

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
