const elements = {
  inputs: [
    {
      id: 'value',
      text: 'Valor',
      type: 'number',
      testid: 'value-input',
    },
    {
      id: 'description',
      text: 'Descrição',
      type: 'text',
      testid: 'description-input',
    },
  ],
  selects: [
    {
      id: 'coin',
      text: 'Moeda',
    },
    {
      id: 'payment',
      text: 'Método de pagamento',
    },
    {
      id: 'tag',
      text: 'Tag',
    },
  ],
  options: [
    ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'],
    ['Alimentação', 'Lazer', 'Saúde', 'Trabalho', 'Transporte'],
  ],
};

export default elements;
