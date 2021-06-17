import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrency } from '../actions';

class Form extends Component {
  componentDidMount() {
    const { currencies } = this.props;
    currencies();
  }

  render() {
  const { currencyLabel } = this.props;
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input
            type="text"
            name="value"
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            type="text"
            name="description"
          />
        </label>

        <label htmlFor="select-coin">
          Moeda
          <select id="select-coin" name="select-coin">
            {Object.values(currencyLabel).map((item) => (
                <option key={ item.code } name={ item.name }>{ item.code }</option>
            ))}
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento
          <select name="payment">
            <option value="money">Dinheiro</option>
            <option value="credit-card">Cartão de crédito</option>
            <option value="debit card">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="despesas">
          Tag:
          <select id="despesas" name="despesas">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
          <label htmlFor="descricao">
            Descrição:
            <input type="text" id="descricao" name="descricao" />
          </label>
        </label>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencyLabel: state.wallet.currencies,
});

const MapDispatchToProps = (dispatch) => ({
  currencies: () => dispatch(fetchCurrency()),
});

Form.propTypes = ({
  currencyLabel: PropTypes.shape,
  currencies: PropTypes.string,
}).isRequired;

export default connect(mapStateToProps, MapDispatchToProps)(Form);
