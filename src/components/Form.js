import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { currencies } = this.props;
    const codeCurrency = Object.keys(currencies)
      .filter((currencie) => currencie !== 'USDT');
    return (
      <div>
        <form>
          <label htmlFor="valor">
            Valor:
            <input type="number" id="valor" />
          </label>

          <label htmlFor="descricao">
            Descrição:
            <input type="text" id="descricao" />
          </label>
          <label htmlFor="moeda">
            Moeda:
            <select id="moeda">
              {codeCurrency.map((currency) => (
                <option key={ currency } value={ currency }>
                  { currency }
                </option>
              ))}
            </select>
          </label>

          <label htmlFor="pagamento">
            Método de pagamento
            <select id="pagamento">
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>

          <label htmlFor="tag">
            Tag:
            <select id="tag">
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}
const mapStateToProps = ({ wallet: { currencies } }) => ({
  currencies,
});

Form.propTypes = {
  currencies: PropTypes.array,
}.isRequired;

export default connect(mapStateToProps)(Form);
