import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { dataApi, adicionarDespesa } from '../actions';

// Referência para a TAG select:
// https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/select

class FormularioDespesa extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.novaDespesa = this.novaDespesa.bind(this);
    // O nome da função "mud" foi devnameso a falta de espaço no render:
    // Mais de 90 caracteres por linha e mais de 90 linhas
    this.mud = this.mud.bind(this);
  }

  componentDidMount() {
    const { siglaMoedas } = this.props;
    siglaMoedas();
  }

  novaDespesa() {
    const { currencies, cadastraDespesa, siglaMoedas } = this.props;
    siglaMoedas();
    const novo = {
      ...this.state,
      exchangeRates: currencies,
    };
    cadastraDespesa(novo);
    this.setState((previousState) => ({ id: previousState.id + 1 }));
  }

  mud(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { currencies } = this.props;
    const listaMoedas = Object.keys(currencies)
      .filter((moeda) => moeda !== 'USDT');
    console.log(currencies); // LEMBRAR DE APAGAR

    return (
      <div className="App-header">
        <form>
          <label className="label" htmlFor="value">
            Valor
            <input className="valor cp" id="value" name="value" onChange={ this.mud } />
          </label>
          <label className="label" htmlFor="currency">
            moeda
            <select className="cp" id="currency" name="currency" onChange={ this.mud }>
              {listaMoedas.map((sigla) => (
                <option key={ sigla }>{ sigla }</option>))}
            </select>
          </label>
          <label className="label" htmlFor="method">
            Método de pagamento
            <select className="cp" id="method" name="method" onChange={ this.mud }>
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <label className="label" htmlFor="tag">
            Tag
            <select className="cp" id="tag" name="tag" onChange={ this.mud }>
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
          <label className="label" htmlFor="des">
            Descrição
            <input className="de cp" id="des" name="description" onChange={ this.mud } />
          </label>
          <button className="btn-add-despesa" type="button" onClick={ this.novaDespesa }>
            Adicionar despesa
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  siglaMoedas: () => dispatch(dataApi()),
  cadastraDespesa: (expenses) => dispatch(adicionarDespesa(expenses)),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

FormularioDespesa.propTypes = {
  siglaMoedas: PropTypes.func.isRequired,
  currencies: PropTypes.objectOf(PropTypes.string).isRequired,
  cadastraDespesa: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormularioDespesa);
