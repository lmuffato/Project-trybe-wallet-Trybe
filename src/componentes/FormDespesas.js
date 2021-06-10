import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ButtonAddDespesa from './ButtonAddDespesa';

class FormDespesas extends React.Component {
  constructor() {
    super();
    this.state = {
      valor: '',
      descricao: '',
      moeda: '',
      metodo: '',
      categoria: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.selectMoedas = this.selectMoedas.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  selectMoedas() {
    const { currencies } = this.props;
    const combo = (
      <select id="moeda" name="moeda" onChange={ this.handleChange }>
        {currencies.map((currencie) => (
          <option key={ currencie } value={ currencie }>{currencie}</option>
        ))}
      </select>
    );

    return combo;
  }

  render() {
    const { valor, descricao, moeda, metodo, categoria } = this.state;
    return (
      <form onSubmit={ this.handleSubmit }>

        <label htmlFor="valor">
          Valor
          <input type="number" id="valor" name="valor" onChange={ this.handleChange } />
        </label>
        <label htmlFor="descricaoDoValor">
          Descrição
          <input
            type="text"
            id="descricaoDoValor"
            name="descricao"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="moeda">
          Moeda
          { this.selectMoedas() }
        </label>
        <label htmlFor="metodoPagamento">
          Método de pagamento
          <select id="metodoPagamento" name="metodo" onChange={ this.handleChange }>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="categoria">
          Tag
          <select id="categoria" name="categoria" onChange={ this.handleChange }>
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">saúde</option>
          </select>
        </label>
        <ButtonAddDespesa
          valor={ valor }
          descricao={ descricao }
          moeda={ moeda }
          metodo={ metodo }
          categoria={ categoria }
        />
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

FormDespesas.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, null)(FormDespesas);
