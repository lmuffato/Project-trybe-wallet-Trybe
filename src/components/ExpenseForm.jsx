import React, { Component } from 'react';
import ExpenseInputs from './ExpenseInputs';

class ExpenseForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      description: '',
      coin: '',
      payment: '',
      tag: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <ExpenseInputs
          handleChange={ this.handleChange }
        />
      </div>
    );
  }
}

export default ExpenseForm;
