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
    name: 'currencie',
    labelName: 'Moeda:',
    options: [],
  },
  {
    select: '',
    name: 'method',
    labelName: 'Metódo de pagamento:',
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
    options: [],
  },
];
