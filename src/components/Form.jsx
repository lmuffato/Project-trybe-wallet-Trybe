import React from 'react';
import ValueInput from './FormInputs/ValueInput';
import DescriptionInput from './FormInputs/description';
import SelectedCoinInput from './FormInputs/SelectedCoinInput';
import PaymentInput from './FormInputs/PaymentInput';
import TagInput from './FormInputs/TagInput';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
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
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { value, description, selectedCoin, payment, tag } = this.state;
    return (
      <form>
        <ValueInput localValue={ value } onChange={ this.handleChange } />
        <DescriptionInput localValue={ description } onChange={ this.handleChange } />
        <SelectedCoinInput localValue={ selectedCoin } onChange={ this.handleChange } />
        <PaymentInput localValue={ payment } onChange={ this.handleChange } />
        <TagInput localValue={ tag } onChange={ this.handleChange } />
      </form>
    );
  }
}

export default Form;

/* mapStateToProps = (state) => ({
  APIContent: state.wallet.coins,
});

Form.propTypes = {
  fetchApiCoin: PropTypes.func,
}.isRequired; */
