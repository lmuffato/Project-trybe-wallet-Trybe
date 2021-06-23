import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { dataApi } from '../actions';

// Referência para a TAG select:
// https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/select

class FormularioDespesa extends React.Component {
  componentDidMount() {
    const { siglaMoedas } = this.props;
    siglaMoedas();
  }

  render() {
    const { currencies } = this.props;
    const listaMoedas = Object.keys(currencies)
      .filter((moeda) => moeda !== 'USDT');
    console.log(currencies); // LEMBRAR DE APAGAR

    return (
      <div className="App-header">
        <form>
          <label className="alinhamentoLabel" htmlFor="valor">
            Valor:
            <input className="valor alinhamentoCampo" type="text" id="valor" />
          </label>
          <label className="alinhamentoLabel" htmlFor="moeda">
            Moeda:
            <select className="alinhamentoCampo" id="moeda">
              {listaMoedas.map((sigla) => (
                <option key={ sigla }>{ sigla }</option>))}
            </select>
          </label>
          <label className="alinhamentoLabel" htmlFor="pagamento">
            Método de pagamento:
            <select className="alinhamentoCampo" id="pagamento">
              <option value="dinheiro" selected>Dinheiro</option>
              <option value="crédito">Cartão de crédito</option>
              <option value="débito">Cartão de débito</option>
            </select>
          </label>
          <label className="alinhamentoLabel" htmlFor="categoria">
            Tag:
            <select className="alinhamentoCampo" id="categoria">
              <option value="alimentação" selected>Alimentação</option>
              <option value="lazer">Lazer</option>
              <option value="trabalho">Trabalho</option>
              <option value="transporte">Transporte</option>
              <option value="saúde">Saúde</option>
            </select>
          </label>
          <label className="alinhamentoLabel" htmlFor="descrição">
            Descrição:
            <input className="descricao alinhamentoCampo" type="text" id="descrição" />
          </label>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  siglaMoedas: () => dispatch(dataApi()),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

FormularioDespesa.propTypes = {
  siglaMoedas: PropTypes.func.isRequired,
  currencies: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormularioDespesa);
