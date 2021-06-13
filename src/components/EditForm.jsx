import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { walletAddEditExpense, walletRemoveExpense } from '../actions';

class EditForm extends Component {
  constructor(props) {
    super(props);
    const { editObject } = this.props;
    const { id, value, description, currency, method, tag, exchangeRates } = editObject;
    this.state = {
      id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates,
    };
    this.editExpend = this.editExpend.bind(this);
    this.valueInput = this.valueInput.bind(this);
    this.optionsinputs = this.optionsinputs.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  editExpend() {
    const { userEditExpense } = this.props;
    userEditExpense(this.state);
  }

  valueInput() {
    const { value } = this.state;
    return (
      <label htmlFor="valor">
        Valor
        <input
          type="number"
          data-testid="value-input"
          id="valor"
          name="value"
          value={ value }
          className="input-f"
          onChange={ this.handleInput }
        />
      </label>
    );
  }

  optionsinputs() {
    const { method, tag } = this.state;
    return (
      <>
        <label htmlFor="method">
          Método de pagamento
          <select
            id="method"
            data-testid="method-input"
            name="method"
            className="input-f"
            value={ method }
            onChange={ this.handleInput }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select
            className="input-f"
            id="tag"
            data-testid="tag-input"
            name="tag"
            value={ tag }
            onChange={ this.handleInput }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </>
    );
  }

  render() {
    const { currencies } = this.props;
    const { description, currency } = this.state;
    return (
      <div className="expend-div">
        <form className="expend-form">
          {this.valueInput()}
          <label htmlFor="description">
            Descrição
            <input
              type="text"
              data-testid="description-input"
              id="description"
              name="description"
              className="input-f"
              onChange={ this.handleInput }
              value={ description }
            />
          </label>
          <label htmlFor="currency">
            Moeda
            <select
              className="input-f"
              id="currency"
              data-testid="currency-input"
              name="currency"
              onChange={ this.handleInput }
              value={ currency }
            >
              {currencies.map((currencie) => (
                <option key={ currencie } value={ currencie }>{currencie}</option>
              ))}
            </select>
          </label>
          {this.optionsinputs()}
          <button id="add-button" type="button" onClick={ this.editExpend }>
            Editar despesa
          </button>
        </form>
      </div>
    );
  }
}

const secondMapDispatchToProps = (dispatch) => ({
  userEditExpense: (payload) => dispatch(walletAddEditExpense(payload)),
  userRemoveExpense: (payload) => dispatch(walletRemoveExpense(payload)),
});

const secondMapStateToProps = ({ wallet: { currencies, expenses, editObject } }) => ({
  currencies,
  expenses,
  editObject,
});

EditForm.propTypes = {
  userEditExpense: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  editObject: PropTypes.shape({
    id: PropTypes.number,
    value: PropTypes.string,
    description: PropTypes.string,
    currency: PropTypes.string,
    method: PropTypes.string,
    tag: PropTypes.string,
    exchangeRates: PropTypes.shape({}),
  }).isRequired,
};

export default connect(secondMapStateToProps, secondMapDispatchToProps)(EditForm);
