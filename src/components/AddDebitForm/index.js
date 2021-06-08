import React from 'react';
import { Form, Label, Input, Select, Option } from './style';

const AddDebitForm = () => (
  <Form>
    <Label htmlFor="value">
      Valor:
      <Input type="text" id="value" />
    </Label>

    <Label htmlFor="description">
      Descrição:
      <Input type="text" id="description" />
    </Label>

    <Label htmlFor="currency">
      Moeda:
      <Select id="currency">
        <Option value="" selected disabled>Selecione uma moeda</Option>
      </Select>
    </Label>

    <Label htmlFor="payment">
      Método de pagamento:
      <Select id="payment">
        <Option value="" selected disabled>Selecione</Option>
        <Option value="">Dinheiro</Option>
        <Option value="">Cartão de crédito</Option>
        <Option value="">Cartão de débito</Option>
      </Select>
    </Label>

    <Label htmlFor="category">
      Tag:
      <Select id="category">
        <Option value="" selected disabled>Selecione uma tag</Option>
        <Option value="">Alimentação</Option>
        <Option value="">Lazer</Option>
        <Option value="">Trabalho</Option>
        <Option value="">Transporte</Option>
        <Option value="">Saúde</Option>
      </Select>
    </Label>
  </Form>
);

export default AddDebitForm;
