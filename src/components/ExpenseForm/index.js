import React from 'react';
import { arrayOf, string, func } from 'prop-types';
import TextInput from '../TextInput';
import SelectInput from '../SelectInput';
import Option from '../Option';

const handleChange = async ({ target: { id, value } }, setExpense, expense) => {
  setExpense({ ...expense, [id]: value });
};

const ExpenseForm = ({ expense, setExpense, ...props }) => {
  const { currencies, methods = [], tags = [], onSubmit, button } = props;
  return (
    <form onSubmit={ onSubmit }>
      <TextInput
        label="Valor"
        name="value"
        onChange={ (e) => handleChange(e, setExpense, expense) }
        value={ expense.value }
      />

      <TextInput
        label="Descrição"
        name="description"
        onChange={ (e) => handleChange(e, setExpense, expense) }
        value={ expense.description }
      />

      <SelectInput
        label="Moeda"
        name="currency"
        value={ expense.currency }
        onChange={ (e) => handleChange(e, setExpense, expense) }
      >
        {currencies.map((opt) => (<Option key={ opt } option={ opt } />))}
      </SelectInput>

      <SelectInput
        label="Método de pagamento"
        name="method"
        value={ expense.method }
        onChange={ (e) => handleChange(e, setExpense, expense) }
      >
        {methods.map((opt) => (<Option key={ opt } option={ opt } />
        ))}
      </SelectInput>

      <SelectInput
        label="Tag"
        name="tag"
        value={ expense.tag }
        onChange={ (e) => handleChange(e, setExpense, expense) }
      >
        {tags.map((opt) => (<Option key={ opt } option={ opt } />))}
      </SelectInput>

      <button type="submit">{button}</button>
    </form>
  );
};

ExpenseForm.propTypes = {
  currencies: arrayOf(string),
  tags: arrayOf(string),
  methods: arrayOf(string),
  button: string,
  onSubmit: func,
}.isRequired;

export default ExpenseForm;
