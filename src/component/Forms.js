import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrencies } from '../actions';

class Forms extends React.Component {
  constructor() {
    super();
    this.optionsCurrecies = this.optionsCurrecies.bind(this);
  }

  componentDidMount() {
    const { currenciesDispatch } = this.props;
    currenciesDispatch();
  }

  optionsCurrecies() {
    const { currenciesState } = this.props;
    const arrayCurrencies = Object.keys(currenciesState);
    console.log(arrayCurrencies);

    return arrayCurrencies.map((cur, index) => <option key={ index }>{ cur }</option>);
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="valor">
            Valor:
            <input aria-label="valor" type="text" />
          </label>
          <label htmlFor="descrição">
            Descrição:
            <input aria-label="descrição" type="text" />
          </label>
          <label htmlFor="moeda">
            Moeda:
            <select aria-label="moeda">
              {this.optionsCurrecies()}
            </select>
          </label>
          <label htmlFor="método de pagamento">
            Método de pagamento:
            <select aria-label="método de pagamento">
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag:
            <select aria-label="tag">
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

Forms.propTypes = {
  currenciesState: PropTypes.func.isRequired,
  currenciesDispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currenciesState: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  currenciesDispatch: () => dispatch(fetchCurrencies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Forms);
