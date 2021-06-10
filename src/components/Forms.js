import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import InputValue from './InputValue';
import InputDescription from './InputDescription';
import InputCurrencies from './InputCurrencies';
import InputPayment from './InputPayment';
import InputCategory from './InputCategory';
import { getCurrenciesAPIThunk2 } from '../actions/wallet';

class Forms extends Component {
  constructor() {
    super();

    this.state = {
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.dispatchInfos = this.dispatchInfos.bind(this);
  }

  /* componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
    console.log('componentDidMount foi renderizado');
  } */

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  dispatchInfos(event) {
    // 0 - chamar o event.preventDefault()
    event.preventDefault();
    // 1 - chamar as propriedades do estado local
    const { expenses, getCurrencies } = this.props;
    // 2 - setar o id
    const id = expenses.length;
    // nesse momento chamar a props q vai despachar os valores
    getCurrencies({ ...this.state, id });
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    return (
      <div>
        <form>
          <InputValue propValue={ value } onChange={ this.handleChange } />
          <InputDescription propValue={ description } onChange={ this.handleChange } />
          <InputCurrencies propValue={ currency } onChange={ this.handleChange } />
          <InputPayment propValue={ method } onChange={ this.handleChange } />
          <InputCategory propValue={ tag } onChange={ this.handleChange } />
          <button type="submit" onClick={ this.dispatchInfos }>Adicionar despesa</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: (value) => dispatch(getCurrenciesAPIThunk2(value)),
});

Forms.propTypes = {
  getCurrencies: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Forms);
