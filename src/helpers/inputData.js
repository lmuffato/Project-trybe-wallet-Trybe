export const inputs = [
  {
    dataTestid: '',
    name: 'price',
    type: 'number',
    labelName: 'Valor:',
  },
  {
    dataTestid: '',
    name: 'description',
    labelName: 'Descrição:',
  },
];

export const selects = [
  {
    select: '',
    name: 'money',
    labelName: 'Moeda:',
    options: [],
  },
  {
    select: '',
    name: 'payment',
    labelName: 'Método de pagamento:',
    options: [
      {
        text: 'Dinheiro',
        value: 'money',
      },
      {
        text: 'Cartão de crédito',
        value: 'credit card',
      },
      {
        text: 'Cartão de débito',
        value: 'debit card',
      },
    ],
  },
  {
    select: '',
    name: 'tag',
    labelName: 'Tag:',
    options: [
      {
        text: 'Alimentação',
        value: 'food',
      },
      {
        text: 'Lazer',
        value: 'leisure',
      },
      {
        text: 'Trabalho',
        value: 'work',
      },
      {
        text: 'Transporte',
        value: 'transportation',
      },
      {
        text: 'Saúde',
        value: 'health',
      },
    ],
  },
];
