import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

class Form extends Component {
  render() {
    const { currencies } = this.props;
    const { USDT, ...rest } = currencies; // https://stackabuse.com/javascript-remove-a-property-from-an-object, link conseguido com a ajuda de : João Nascimento.
    const codeCoins = Object.keys(rest);
    return (
      <div>
        <form>
          <label htmlFor="value">
            Valor:
            <input type="text" id="value" placeholder="Valor" />
          </label>
          <label htmlFor="coin">
            Moeda:
            <select id="coin">
              { codeCoins.map((codeCoin) => (
                <option key={ codeCoin }>{ codeCoin }</option>
              )) }
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
          <label htmlFor="description">
            Descrição:
            <input type="text" id="description" placeholder="Descrição" />
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
  currencies: propTypes.array,
}.isRequired;

export default connect(mapStateToProps)(Form);
