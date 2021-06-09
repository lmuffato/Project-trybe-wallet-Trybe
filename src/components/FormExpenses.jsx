import React, { Component } from 'react';
import CoinForm from './CoinForm';
import OptionForm from './OptionForm';
import ValueForm from './ValueForm';

class FormExpenses extends Component {
  render() {
    return (
      <form className="d-flex">
        <ValueForm />
        <CoinForm />
        <OptionForm />
      </form>
    );
  }
}

export default FormExpenses;
