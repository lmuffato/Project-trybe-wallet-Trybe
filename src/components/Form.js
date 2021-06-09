import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrencyThunk } from '../actions';
import Input from './Input';

class Form extends React.Component {
  componentDidMount() {
    const { getApiAwesome } = this.props;
    getApiAwesome();
  }

  render() {
    const { currencies } = this.props;
    const filteredCurrencies = currencies.filter((currency) => (
      currency.codein !== 'BRLT'));
    return (
      <div className="container">
        <form>
          <Input id="Valor" type="number" />
          <Input id="Descrição" type="text" />
          <label htmlFor="currency">
            Moeda
            <select id="currency">
              {filteredCurrencies.map((currency) => (
                <option
                  key={ currency.code }
                  value={ currency.code }
                >
                  {currency.code}

                </option>
              ))}
            </select>
          </label>
          <label htmlFor="payment">
            Método de pagamento
            <select id="payment">
              <option value="">Dinheiro</option>
              <option value="">Cartão de crédito</option>
              <option value="">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select id="tag">
              <option value="">Alimentação</option>
              <option value="">Lazer</option>
              <option value="">Trabalho</option>
              <option value="">Transporte</option>
              <option value="">Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ wallet }) => ({
  currencies: wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getApiAwesome: () => dispatch(getCurrencyThunk()),
});

Form.propTypes = {
  getApiAwesome: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.string,
  })).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
