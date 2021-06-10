import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.HandleMoeda = this.HandleMoeda.bind(this);
  }

  HandleMoeda() {
    const { currencies } = this.props;

    const filter = currencies.filter((item) => item[0] !== 'USDT'); // filtro o array
    console.log(filter);

    // retorno as options
    const options = filter.map((item) => (
      <option key={ item[0] } value={ item[0] }>
        { item[0] }
      </option>
    ));

    return options;
  }

  render() {
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input type="number" name="valor" id="valor" />
        </label>

        <label htmlFor="moeda">
          Moeda:
          <select id="moeda">
            {this.HandleMoeda()}
          </select>
        </label>

        <label htmlFor="pag">
          PMétodo de pagamento:
          <select id="pag">
            <option value="dinheiro"> Dinheiro </option>
            <option value="crédito"> Cartão de crédito </option>
            <option value="débito"> Cartão de débito </option>
          </select>
        </label>

        <label htmlFor="tag">
          Tag:
          <select id="tag">
            <option value="alimentação"> Alimentação </option>
            <option value="lazer"> Lazer </option>
            <option value="trabalho"> Trabalho </option>
            <option value="transporte"> Transporte </option>
            <option value="saude"> Saúde </option>
          </select>
        </label>

        <label htmlFor="descrição">
          Descrição:
          <textarea type="number" name="valor" id="descrição" />
        </label>

      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

Form.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.array).isRequired,
};

export default connect(mapStateToProps, null)(Form);
