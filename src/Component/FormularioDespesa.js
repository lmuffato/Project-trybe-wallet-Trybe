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
      name: 0,
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

  componentDnameMount() {
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
    this.setState((previousState) => ({ name: previousState.name + 1 }));
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
            <input className="valor cp" type="text" name="value" onChange={ this.mud } />
          </label>
          <label className="label" htmlFor="currency">
            Moeda
            <select className="cp" name="currency" onChange={ this.mud }>
              {listaMoedas.map((sigla) => (
                <option key={ sigla }>{ sigla }</option>))}
            </select>
          </label>
          <label className="label" htmlFor="method">
            Método de pagamento
            <select className="cp" name="method" onChange={ this.mud }>
              <option value="dinheiro">Dinheiro</option>
              <option value="crédito">Cartão de crédito</option>
              <option value="débito">Cartão de débito</option>
            </select>
          </label>
          <label className="label" htmlFor="tag">
            Tag
            <select className="cp" name="tag" onChange={ this.mud }>
              <option value="alimentação">Alimentação</option>
              <option value="lazer">Lazer</option>
              <option value="trabalho">Trabalho</option>
              <option value="transporte">Transporte</option>
              <option value="saúde">Saúde</option>
            </select>
          </label>
          <label className="label" htmlFor="description">
            Descrição
            <input className="de cp" name="description" onChange={ this.mud } />
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
