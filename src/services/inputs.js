const elements = {
  inputs: [
    {
      control: 'value',
      text: 'Valor',
      type: 'number',
    },
    {
      control: 'description',
      text: 'Descrição',
      type: 'text',
    },
  ],
  selects: [
    {
      control: 'currency',
      text: 'Moeda',
    },
    {
      control: 'method',
      text: 'Método de pagamento',
    },
    {
      control: 'tag',
      text: 'Tag',
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
