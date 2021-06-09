const elements = {
  inputs: [
    {
      control: 'value',
      text: 'Valor',
      type: 'number',
      testid: 'value-input',
    },
    {
      control: 'description',
      text: 'Descrição',
      type: 'text',
      testid: 'description-input',
    },
  ],
  selects: [
    {
      control: 'currency',
      text: 'Moeda',
      testid: 'currency-input',
    },
    {
      control: 'method',
      text: 'Método de pagamento',
      testid: 'method-input',
    },
    {
      control: 'tag',
      text: 'Tag',
      testid: 'tag-input',
    },
  ],
  options: [
    ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'],
    ['Alimentação', 'Lazer', 'Saúde', 'Trabalho', 'Transporte'],
  ],
  th: [
    'Descrição',
    'Tag',
    'Método de pagamento',
    'Valor',
    'Moeda',
    'Câmbio utilizado',
    'Valor convertido',
    'Moeda de conversão',
    'Editar/Excluir',
  ],
};

export default elements;
