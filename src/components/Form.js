import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getExpenses, ThunkAPI2, getTotalValue } from '../actions/wallet';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
    };

    this.HandleMoedaOption = this.HandleMoedaOption.bind(this);
    this.HandleValor = this.HandleValor.bind(this);
    this.HandleMoeda = this.HandleMoeda.bind(this);
    this.HandlePag = this.HandlePag.bind(this);
    this.HandleTag = this.HandleTag.bind(this);
    this.HandleDescricao = this.HandleDescricao.bind(this);
    this.HandleButton = this.HandleButton.bind(this);
    // this.HandleExpenses = this.HandleExpenses.bind(this);
  }

  HandleMoedaOption() {
    const { currencies } = this.props;

    const filter = currencies.filter((item) => item[0] !== 'USDT'); // filtro o array
    // console.log(filter);

    // retorno as options
    const options = filter.map((item) => (
      <option key={ item[0] } value={ item[0] }>
        { item[0] }
      </option>
    ));

    return options;
  }

  HandleValor(event) { this.setState({ value: event.target.value }); }

  HandleMoeda(event) { this.setState({ currency: event.target.value }); }

  HandlePag(event) { this.setState({ method: event.target.value }); }

  HandleTag(event) { this.setState({ tag: event.target.value }); }

  HandleDescricao(event) { this.setState({ description: event.target.value }); }

  // HandleExpenses() {
  //   const { value, currency, method, tag, description, id } = this.state;
  //   const { exchangeRates, firstDispatchGetExpenses } = this.props;

  //   // crio o objeto que vai para o estado global
  //   const expenses = {
  //     id,
  //     value,
  //     currency,
  //     method,
  //     description,
  //     tag,
  //     exchangeRates,
  //   };

  //   firstDispatchGetExpenses(expenses);
  //   // passo o expenses para o estado global

  //   this.setState({
  //     id: idNumber,
  //    }, () => this.HandleExpenses()); // só chamo a função depois que o id é atualizado
  // }

  async HandleButton() {
    const { id, totalValue, ThunkAPI2Dispatch, firstDispatchGetExpenses,
      firstGetTotalValue } = this.props;
    // pego do estado global a partir do mapStateToProps e as funções tunk do mapDispatchToProps

    await ThunkAPI2Dispatch();
    // espero terminar a requisição da api2

    const { exchangeRates } = this.props;
    // pego o objeto exchangeRates depois que chamei api, sendo assim depois que ele foi preenchido

    const idNumber = id + 1;
    // soma para criar o valor do novo id
    // para criar a contagem do id eu crio um id no estado global e atualizo ele cada vez que clico no botão,
    // assim o valor inicial da contagem é imutavel e fixo, e conforme vou clicando ele vai atualizando

    const { value, currency, method, tag, description } = this.state;

    // crio o objeto que vai para o estado global
    const expenses = {
      id: idNumber,
      value,
      currency,
      method,
      tag,
      description,
      exchangeRates,
    };

    console.log(expenses);

    firstDispatchGetExpenses(expenses);
    // passo o expenses para o estado global

    const valueNumber = parseFloat(value); // Number(value); // Number(value).toFixed(2); // parseFloat(value); parseInt(value, 10);
    // transformo o value em numero
    const valueMoeda = exchangeRates[currency].ask;
    const total = totalValue + (valueNumber * valueMoeda);

    // na mesa logica da const idNumber, faço a soma do valor total das despesas
    // crio um totalValue no estado global e atualizo ele cada vez que clico no botão o enviando para o estado global,
    console.log(typeof value);
    firstGetTotalValue(total); // colocar set
    // passo o valor total para o estado global na chave totalvalue
  }

  render() {
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input type="number" name="valor" id="valor" onChange={ this.HandleValor } />
        </label>

        <label htmlFor="moeda">
          Moeda:
          <select id="moeda" onChange={ this.HandleMoeda }>
            { this.HandleMoedaOption() }
          </select>
        </label>

        <label htmlFor="pag">
          Método de pagamento:
          <select id="pag" onChange={ this.HandlePag }>
            <option value="Dinheiro"> Dinheiro </option>
            <option value="Cartão de crédito"> Cartão de crédito </option>
            <option value="Cartão de débito"> Cartão de débito </option>
          </select>
        </label>

        <label htmlFor="tag">
          Tag:
          <select id="tag" onChange={ this.HandleTag }>
            <option value="Alimentação"> Alimentação </option>
            <option value="Lazer"> Lazer </option>
            <option value="Trabalho"> Trabalho </option>
            <option value="Transporte"> Transporte </option>
            <option value="Saúde"> Saúde </option>
          </select>
        </label>

        <label htmlFor="descrição">
          Descrição:
          <textarea type="text" id="descrição" onChange={ this.HandleDescricao } />
        </label>

        <button type="button" onClick={ this.HandleButton }>
          Adicionar despesas
        </button>
      </form>
    );
  }
}

// estou pegando os valores do estado global redux
const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  id: state.wallet.id,
  exchangeRates: state.wallet.exchangeRates,
  totalValue: state.wallet.totalValue,
});

// estou passando valores para o estado globar redux
const mapDispatchToProps = (dispatch) => ({
  firstDispatchGetExpenses: (expenses) => dispatch(getExpenses(expenses)),
  ThunkAPI2Dispatch: () => dispatch(ThunkAPI2()),
  firstGetTotalValue: (value) => dispatch(getTotalValue(value)),
});

Form.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.array).isRequired,
  firstDispatchGetExpenses: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  ThunkAPI2Dispatch: PropTypes.func.isRequired,
  exchangeRates: PropTypes.objectOf(PropTypes.array).isRequired,
  totalValue: PropTypes.number.isRequired,
  firstGetTotalValue: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);

// tive ajuda do João Andrade para entender asincronidade da chamada do thunk api e para atualizar o estado global da chave expenses
