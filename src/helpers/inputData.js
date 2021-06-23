export const inputs = [
  {
    dataTestid: '',
    name: 'value',
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
    name: 'currency',
    labelName: 'Moeda:',
    options: undefined,
  },
  {
    select: '',
    name: 'method',
    labelName: 'Método de pagamento:',
    options: [
      {
        text: 'Dinheiro',
        value: 'Dinheiro',
      },
      {
        text: 'Cartão de crédito',
        value: 'Cartão de crédito',
      },
      {
        text: 'Cartão de débito',
        value: 'Cartão de débito',
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
        value: 'Alimentação',
      },
      {
        text: 'Lazer',
        value: 'Lazer',
      },
      {
        text: 'Trabalho',
        value: 'Trabalho',
      },
      {
        text: 'Transporte',
        value: 'Transporte',
      },
      {
        text: 'Saúde',
        value: 'Saúde',
      },
    ],
  },
];
