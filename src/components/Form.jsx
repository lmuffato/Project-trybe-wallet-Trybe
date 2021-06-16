import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ValueInput from './FormInputs/ValueInput';
import DescriptionInput from './FormInputs/description';
import SelectedCoinInput from './FormInputs/SelectedCoinInput';
import PaymentInput from './FormInputs/PaymentInput';
import TagInput from './FormInputs/TagInput';
import { actionThunkAdd } from '../actions/index';
// import { ThunkAPI } from '../actions/index';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      description: '',
      selectedCoin: '',
      payment: '',
      tag: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.sendInfo = this.sendInfo.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  sendInfo(event) {
    event.preventDefault();
    const { expenses, dispatchAdd } = this.props;
    const id = expenses.length;
    const { value, description, selectedCoin, payment, tag } = this.state;
    const formInfos = { id, value, description, selectedCoin, payment, tag };
    dispatchAdd(formInfos);
    console.log(expenses);
  }

  render() {
    const { value, description, selectedCoin, payment, tag } = this.state;
    return (
      <secttion>
        <form>
          <ValueInput localValue={ value } onChange={ this.handleChange } />
          <DescriptionInput localValue={ description } onChange={ this.handleChange } />
          <SelectedCoinInput localValue={ selectedCoin } onChange={ this.handleChange } />
          <PaymentInput localValue={ payment } onChange={ this.handleChange } />
          <TagInput localValue={ tag } onChange={ this.handleChange } />
        </form>
        <button
          type="submit"
          onClick={ this.sendInfo }
        >
          Adicionar despesa
        </button>
      </secttion>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchAdd: (payload) => dispatch(actionThunkAdd(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);

Form.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object),
  dispatchAdd: PropTypes.func,
}.isRequired;
