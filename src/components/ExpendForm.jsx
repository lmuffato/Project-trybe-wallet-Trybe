import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import currencyAPI from '../services/api';
import { walletAddExpense } from '../actions';
import TotalExpense from './TotalExpense';
// import { walletAddCurrencie, walletAddExpense, currencyAPIThunk } from '../actions';

class ExpendForm extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: 0,
      description: '',
      currency: '',
      method: '',
      tag: '',
      exchangeRates: {},
    };
    this.addExpend = this.addExpend.bind(this);
  }

  async addExpend() {
    const { userAddExpense } = this.props;
    const getData = await currencyAPI();
    const valueInput = document.getElementById('valor');
    const descriptionInput = document.getElementById('description');
    const currencieInput = document.getElementById('currencie');
    const methodInput = document.getElementById('paymentMethod');
    const tagInput = document.getElementById('tag');
    await this.setState((previousState) => ({
      id: previousState.id + 1,
      value: Number(valueInput.value),
      description: descriptionInput.value,
      currency: currencieInput.value,
      method: methodInput.value,
      tag: tagInput.value,
      exchangeRates: getData,
    }));
    userAddExpense(this.state);
  }

  render() {
    const { currencies } = this.props;
    const { id } = this.state;
    const filtredCurencie = Object.keys(currencies)
      .filter((currencie) => currencie !== 'USDT');
    return (
      <div>
        <form>
          <label htmlFor="valor">
            Valor
            <input type="number" id="valor" defaultValue={ 0 } name="Valor" />
          </label>
          <label htmlFor="description">
            Descrição
            <input type="text" id="description" name="Descrição" />
          </label>
          <label htmlFor="currencie">
            Moeda
            <select id="currencie">
              {filtredCurencie.map((currencie) => (
                <option key={ currencie } value={ currencie }>{ currencie }</option>
              ))}
            </select>
          </label>
          <label htmlFor="paymentMethod">
            Método de pagamento
            <select id="paymentMethod" name="Método de pagamento">
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito" selected>Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>

          <label htmlFor="tag">
            Tag
            <select id="tag" name="Tag">
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer" selected>Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
          <button type="button" onClick={ this.addExpend }>Adicionar despesa</button>
        </form>
        {console.log(id)}
        {id > 0 ? <TotalExpense /> : <div />}
      </div>
    );
  }
}

const secondMapDispatchToProps = (dispatch) => ({
  userAddExpense: (payload) => dispatch(walletAddExpense(payload)),
  // userGetApiData: () => dispatch(currencyAPIThunk()),
});

const secondMapStateToProps = ({ wallet: { currencies, expenses } }) => ({
  currencies,
  expenses,
});

ExpendForm.propTypes = {
  userAddExpense: PropTypes.func.isRequired,
  // userAddCurrencie: PropTypes.func.isRequired,
  // email: PropTypes.string.isRequired,
  // isloading: PropTypes.bool.isRequired,
  currencies: PropTypes.shape({}).isRequired,
};

export default connect(secondMapStateToProps, secondMapDispatchToProps)(ExpendForm);
