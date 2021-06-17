import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAPI, fatchExpDisp } from '../actions/index';
import InputOne from './inputs/InputOne';
import InputTwo from './inputs/InputTwo';

class Form extends Component {
  constructor() {
    super();
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.state = {
      value: '',
      currency: '',
      method: '',
      tag: '',
      description: '',
    };
  }

  componentDidMount() {
    const { fetchApi } = this.props;
    fetchApi();
  }

  handleChangeInput({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  handleDispatch(e) {
    e.preventDefault();
    const { expenses, getExpense } = this.props;
    const id = expenses.length;
    getExpense({ ...this.state, id });
  }

  render() {
    const { currencies } = this.props;
    const { value, description, currency, method, tag } = this.state;
    return (
      <form>
        <InputOne
          currencies={ currencies }
          handleChangeInput={ this.handleChangeInput }
          value={ value }
          descricao={ description }
          moeda={ currency }
        />
        <InputTwo
          handleChangeInput={ this.handleChangeInput }
          pagamento={ method }
          tag={ tag }
        />
        <button onClick={ this.handleDispatch } type="submit"> Adcionar Despesas</button>
      </form>
    );
  }
}
const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});
const mapDispatchToProps = (dispatch) => ({
  fetchApi: () => dispatch(fetchAPI()),
  getExpense: (expenses) => dispatch(fatchExpDisp(expenses)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Form);
Form.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  fetchApi: PropTypes.func.isRequired,
  expenses: PropTypes.string.isRequired,
  getExpense: PropTypes.func.isRequired,
};
