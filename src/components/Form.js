import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Select from './Select';

class Form extends Component {
  render() {
    const { value, description, coin,
      paymentType, tag, coins, onChange, handlerAddExpense } = this.props;

    return (
      <form>
        <Input name="value" value={ value } onChange={ onChange } type="text">
          Valor
        </Input>
        <Input name="description" value={ description } onChange={ onChange } type="text">
          Descrição
        </Input>
        <Select
          onChange={ onChange }
          coin={ coin }
          coins={ coins }
          paymentType={ paymentType }
          tag={ tag }
        />
        <button type="button" onClick={ handlerAddExpense }>Adicionar despesa</button>
      </form>
    );
  }
}

Form.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  handlerAddExpense: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
  coins: PropTypes.arrayOf(PropTypes.string).isRequired,
  coin: PropTypes.string.isRequired,
  paymentType: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
};

export default Form;
