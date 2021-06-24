import React from 'react';
import fetchByCurrency from '../../services/api/servicesApi';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.generateSelect = this.generateSelect.bind(this);
    this.generateInput = this.generateInput.bind(this);
    this.fetchByCurrency = this.getByCurrency.bind(this);

    this.state = {
      coin: [],
    };
  }

  componentDidMount() {
    this.getByCurrency();
  }

  async getByCurrency() {
    const data = await fetchByCurrency();
    this.setState({ coin: data });
  }

  generateSelect(name, label, optionArray) {
    return (
      <label htmlFor={ name }>
        {label}
        <select
          id={ name }
        >
          {optionArray.map((element, index) => <option key={ index }>{element}</option>)}
        </select>
      </label>
    );
  }

  generateInput(name, label, type) {
    return (
      <label htmlFor={ name }>
        {label}
        <input
          type={ type }
          id={ name }
        />
      </label>
    );
  }

  render() {
    const optionTag = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const optionPayment = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const { coin } = this.state;

    return (
      <form>
        {this.generateInput('valor',
          'Valor:', 'number')}
        {this.generateInput('description',
          'Descrição', 'text')}
        {this.generateSelect('moeda',
          'Moeda', coin)}
        {this.generateSelect('payment',
          'Método de pagamento', optionPayment)}
        {this.generateSelect('tag', 'Tag', optionTag)}
      </form>
    );
  }
}

export default Form;
