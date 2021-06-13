import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrencies } from '../actions/index';

class Forms extends React.Component {
  constructor() {
    super();
    this.renderOptionByAPI = this.renderOptionByAPI.bind(this);
  }

  componentDidMount() {
    const { fetchAPI } = this.props;
    fetchAPI();
  }

  renderOptionByAPI() {
    const { currencies } = this.props;
    return currencies.map((coin) => (
      <option data-testid={ coin } key={ coin }>{ coin }</option>
    ));
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="valor">
            Valor
            <input id="valor" type="text" />
          </label>
          <label htmlFor="descriçao">
            Descrição
            <input id="descriçao" type="text" />
          </label>
          <label htmlFor="moeda">
            Moeda
            <select id="moeda">
              { this.renderOptionByAPI() }
            </select>
          </label>
          <label htmlFor="mtdPagamento">
            Método de pagamento
            <select id="mtdPagamento" name="metodo">
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select id="tag" name="tag">
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

const mapStateToPros = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAPI: () => dispatch(getCurrencies()),
});

Forms.propTypes = {
  fetchAPI: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToPros, mapDispatchToProps)(Forms);
