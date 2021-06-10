import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrenciesThunk } from '../actions';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { currencies } = this.props;
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input name="value" type="number" aria-label="valor" />
        </label>
        <label htmlFor="description">
          Descrição:
          <input name="description" type="text" aria-label="descrição" />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select name="currency" aria-label="moeda" onChange={ this.handleChange }>
            {currencies.map((item) => (
              <option key={ item.code } value={ item.code }>
                { item.code }
              </option>))}
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento:
          <select
            name="method"
            aria-label="método de pagamento"
            onChange={ this.handleChange }
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select name="tag" aria-label="tag" onChange={ this.handleChange }>
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

Form.propTypes = {
  currencies: PropTypes.objectOf({}).isRequired,
  getCurrencies: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(getCurrenciesThunk()),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
