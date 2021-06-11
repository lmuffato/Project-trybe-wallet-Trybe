import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';
import Select from '../Select';

const toInputs = [
  { type: 'number', label: 'Valor', name: 'value', testeId: 'value-input' },
  { type: 'text', label: 'Descrição', name: 'description', testeId: 'description-input' },
];

const toSelects = (currencies) => ([
  { label: 'Moeda', name: 'currency', testeId: 'currency-input', options: currencies },
  {
    label: 'Método de pagamento',
    name: 'method',
    testeId: 'method-input',
    options: [
      'escolha', 'Dinheiro', 'Cartão de crédito', 'Cartão de débito',
    ],
  },
  {
    label: 'Tag',
    name: 'tag',
    testeId: 'tag-input',
    options: [
      'escolha', 'Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'],
  },
]);

class Form extends React.Component {
  render() {
    const { currencies, value, onChange } = this.props;
    return (
      <form>
        {
          toInputs.map((input, index) => (
            <Input
              type={ input.type }
              id={ input.name }
              label={ input.label }
              name={ input.name }
              testeId={ input.testeId }
              key={ index }
              onChange={ onChange }
              value={ value[input.name] }
            />
          ))
        }
        {
          toSelects(currencies).map((select, index) => (
            <Select
              label={ select.label }
              id={ select.name }
              name={ select.name }
              testeId={ select.testeId }
              options={ select.options }
              key={ index }
              onChange={ onChange }
              value={ value[select.name] }
            />
          ))
        }
      </form>
    );
  }
}

Form.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string),
  value: PropTypes.object,
}.isRequired;

export default Form;
