import React from 'react';
import PropTypes, { arrayOf, func } from 'prop-types';
import { connect } from 'react-redux';

import styles from './styles.module.css';
import { inputs, selects } from '../../../../helpers/inputData';

import Input from '../../../../components/Input';
import Select from '../../../../components/Select';
import Button from '../../../../components/Button';
import { addExpensesThunk } from '../../../../actions';

class Forms extends React.Component {
  constructor() {
    super();

    this.getCurrenciesOptions = this.getCurrenciesOptions.bind(this);
    this.getState = this.getState.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
  }

  getCurrenciesOptions() {
    const { currencies } = this.props;

    return currencies.map((currencie) => ({
      text: currencie.code,
      value: currencie.code,
    }));
  }

  getState() {
    const {
      value,
      description,
      currency,
      method,
      tag,
    } = this.state;

    return {
      value,
      description,
      currency,
      method,
      tag,
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { addExpense } = this.props;
    addExpense(this.state);
    this.setState({
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    });
  }

  render() {
    return (
      <form className={ styles.formField }>
        {
          inputs.map((input) => {
            const { [input.name]: value } = this.getState();
            return (
              <Input
                key={ input.name }
                { ... input }
                value={ value }
                onChange={ this.handleChange }
              />
            );
          })
        }

        {
          selects.map((select) => {
            const { [select.name]: value } = this.getState();
            let { options } = select;

            if (!options) {
              options = this.getCurrenciesOptions();
            }

            return (
              <Select
                key={ select.text }
                { ...select }
                options={ options }
                value={ value }
                onChange={ this.handleChange }
              />
            );
          })
        }
        <Button
          onClick={ this.handleSubmit }
        >
          Adicionar despesa
        </Button>
      </form>
    );
  }
}

Forms.propTypes = {
  currencies: arrayOf(PropTypes.object).isRequired,
  addExpense: func.isRequired,
};

const mapDisptachToProps = (dispatch) => ({
  addExpense: (state) => dispatch(addExpensesThunk(state)),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps, mapDisptachToProps)(Forms);
