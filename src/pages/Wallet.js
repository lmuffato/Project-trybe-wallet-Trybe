import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from '../components/Input';
import Select from '../components/Select';

const toInputs = [
  { type: 'text', label: 'Valor', name: 'value', testeId: '' },
  { type: 'text', label: 'Descrição', name: 'description', testeId: '' },
];

const toSelects = [
  { label: 'Moeda', name: 'currency', testeId: '', options: ['real', 'dollar'] },
  {
    label: 'Método de pagamento',
    name: 'pay-mode',
    testeId: '',
    options: [
      'Dinheiro', 'Cartão de crédito', 'Cartão de débito',
    ],
  },
  {
    label: 'Tag',
    name: 'tag',
    testeId: '',
    options: [
      'Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'],
  },
];

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        <header>
          <span data-testid="email-field">{email}</span>
          <span data-testid="total-field">0</span>
          <span data-testid="header-currency-field">BRL</span>
        </header>
        <form>
          {
            toInputs.map((input, index) => (
              <Input
                type={input.type }
                id={ input.name }
                label={input.label}
                name={input.name}
                testeId={input.testeId}
                key={index}
              />
            ))
          }
          {
            toSelects.map((select, index) => (
              <Select
                label={select.label}
                id={ select.name }
                name={select.name}
                testeId={select.testeId}
                options={select.options}
                key={index}
              />
            ))
          }
        </form>
      </div>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps, null)(Wallet);
