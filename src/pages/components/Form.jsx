import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchCurrency } from '../../actions';
import InputValueForms from './InputValueForms';
import InputDescriptionForms from './InputDescriptionForms';

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: '',
      description: '',
      // paymentMethod: 'Dinheiro',
      // tag: 'Alimentação',
    };
  }

  componentDidMount() {
    const { fetchCurrencies } = this.props;
    fetchCurrencies();
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  render() {
    const {
      state: { value, description },
      handleChange, props: { currenciesProps },
    } = this;
    const currencies = Object.keys(currenciesProps)
      .filter((currency) => (currency !== 'USDT'));
    return (
      <form>
        <InputValueForms value={ value } handleChange={ handleChange } />
        <InputDescriptionForms
          description={ description }
          handleChange={ handleChange }
        />
        <label htmlFor="currency">
          Moeda:
          <select id="currency">
            {currencies
              .map((currency, index) => <option key={ index }>{ currency }</option>)}
          </select>
        </label>

        <label htmlFor="paymentMethod">
          Método de pagamento:
          <select id="paymentMethod">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="tag">
          Tag:
          <select id="tag">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>

        <button type="submit">Adicionar Despesa</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currenciesProps: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrencies: () => dispatch(fetchCurrency()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);

Form.propTypes = {
  fetchCurrencies: PropTypes.func.isRequired,
  currenciesProps: PropTypes.objectOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};
