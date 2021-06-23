import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { wallet as walletAction, getCURRENCIESApiThunk } from '../actions';
import getCurrencies from '../serveces/fetchApis';

class Expenses extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleState = this.handleState.bind(this);
  }

  componentDidMount() {
    const { getCurrency } = this.props;
    getCurrency();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleValue() {
    // const { value } = this.state;
    return (
      <div>
        <label htmlFor="id-valor">
          Valor
          <br />
          <input
            type="text"
            id="id-valor"
            name="value"
            // value={ value }
            onChange={ this.handleChange }
          />
        </label>
      </div>
    );
  }

  handleCurrency() {
    const { currencies } = this.props;
    // console.log(currencies);
    const currencys = Object.keys(currencies);
    // console.log(currencie);
    return (
      <label htmlFor="id-moeda">
        Moeda
        <br />
        <select
          id="id-moeda"
          name="currency"
          // value={ currency }
          onChange={ this.handleChange }
        >
          {
            currencys.map((currency) => (
              <option key={ currency } value={ currency }>{currency}</option>
            ))
          }
        </select>
      </label>
    );
  }

  // handleMethod() {
  //   // const { method } = this.state;
  //   return (
  //     <div>
  //       <label htmlFor="id-metodoDePagamento">
  //         Método de pagamento
  //         <br />
  //         <select
  //           id="id-metodoDePagamento"
  //           name="method"
  //           // value={ method }
  //           onChange={ this.handleChange }
  //         >
  //           <option value="dinheiro">Dinheiro</option>
  //           <option value="cartaoDecredito">Cartão de crédito</option>
  //           <option value="cartaoDeDebito">Cartão de débito</option>
  //         </select>
  //       </label>
  //     </div>
  //   );
  // }

  handleMethod() {
    // const { method } = this.state;
    const methods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    return (
      <div>
        <label htmlFor="id-metodoDePagamento">
          Método de pagamento
          <br />
          <select
            id="id-metodoDePagamento"
            name="method"
            // value={ method }
            onChange={ this.handleChange }
          >
            {
              methods.map((method) => (
                <option key={ method } value={ method }>{method}</option>
              ))
            }
          </select>
        </label>
      </div>
    );
  }

  handleTag() {
    // const { tag } = this.props;
    return (
      <div>
        <label htmlFor="id-tag">
          Tag
          <br />
          <select
            id="id-tag"
            name="tag"
            // value={ tag }
            onChange={ this.handleChange }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </div>
    );
  }

  handleDescription() {
    // const { description } = this.state;
    return (
      <div>
        <label htmlFor="id-descricao">
          Descrição
          <br />
          <textarea
            id="id-descricao"
            name="description"
            // value={ description }
            onChange={ this.handleChange }
          />
        </label>
      </div>
    );
  }

  handleState() {
    const { id } = this.state;
    const { wallet } = this.props;

    getCurrencies()
      .then((res) => {
        const { ...moeda } = res;
        // console.log(moeda);

        // this.setState((prevId) => ({ id: prevId.id + 1, exchangeRates: moeda }));
        this.setState({ id: id + 1, exchangeRates: moeda });
        wallet({ ...this.state, id });
      })
      .catch((error) => error);
  }

  render() {
    // const { wallet } = this.props;
    // console.log(wallet);
    return (
      <>
        <h1>Despesa</h1>
        <form>
          {/* Valor */}
          {this.handleValue()}

          {/* Moeda */}
          {this.handleCurrency()}

          {/* // MetodoDePagamento */}
          {this.handleMethod()}

          {/* Tag */}
          {this.handleTag()}

          {/* <Descricao */}
          {this.handleDescription()}

          <button
            type="button"
            onClick={ this.handleState }
          >
            Adicionar despesa
          </button>
        </form>
      </>
    );
  }
}

const mapStateToProps = ({ wallet: { currencies } }) => ({
  currencies,
  // currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  wallet: (state) => dispatch(walletAction(state)),
  getCurrency: () => dispatch(getCURRENCIESApiThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Expenses);

Expenses.propTypes = {
  wallet: PropTypes.func,
}.isRequired;
