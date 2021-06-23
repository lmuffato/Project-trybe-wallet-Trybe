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
      currency: '',
      method: '',
      tag: '',
    };
    this.novaDespesa = this.novaDespesa.bind(this);
    // O nome da função "mud" foi devidso a falta de espaço no render:
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
    const { id, value } = event.target;
    this.setState({
      [id]: value,
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
            Valor:
            <input className="valor cp" type="text" id="value" onChange={ this.mud } />
          </label>
          <label className="label" htmlFor="currency">
            Moeda:
            <select className="cp" id="currency" onChange={ this.mud }>
              {listaMoedas.map((sigla) => (
                <option key={ sigla }>{ sigla }</option>))}
            </select>
          </label>
          <label className="label" htmlFor="method">
            Método de pagamento:
            <select className="cp" id="method" onChange={ this.mud }>
              <option value="dinheiro" selected>Dinheiro</option>
              <option value="crédito">Cartão de crédito</option>
              <option value="débito">Cartão de débito</option>
            </select>
          </label>
          <label className="label" htmlFor="tag">
            Tag:
            <select className="cp" id="tag" onChange={ this.mud }>
              <option value="alimentação" selected>Alimentação</option>
              <option value="lazer">Lazer</option>
              <option value="trabalho">Trabalho</option>
              <option value="transporte">Transporte</option>
              <option value="saúde">Saúde</option>
            </select>
          </label>
          <label className="label" htmlFor="description">
            Descrição:
            <input className="de cp" type="text" id="description" onChange={ this.mud } />
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
