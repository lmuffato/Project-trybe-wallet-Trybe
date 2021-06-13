// salvar uma chave edit na store, quando o botão 'editar' é clicado e o estado atualiza para true, aí o Edit aparece no lugar do Input, fazer um ternário no componente Wallet para gerenciar o componente renderizado
// o componente edit recebe as informações do item que estão na store e a pessoa usuária pode editar essas informações, e quando clicar no botão de finalizar a edição, esse botão dispara uma action que vai pro reducer para atualizar a store, naquele mesmo item.
// a construção do componente Edit pode ser bem parecida com a do componente Input

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Inputs from './Inputs';
import Selects from './Selects';
import { finishEdit } from '../actions/tableActions';

class Edit extends React.Component {
  constructor(props) {
    super(props);

    const { props: { item } } = this;
    const { id, value, currency, method, tag, description, exchangeRates } = item[0];

    this.state = {
      id,
      value,
      currency,
      method,
      tag,
      description,
      exchangeRates,
    };

    this.handleChange = this.handleChange.bind(this);
    // this.handleExchanges = this.handleExchanges.bind(this);
    // this.resetState = this.resetState.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { props: { item, editFinish } } = this;
    // console.log(item[0]);
    // console.log(this.state.id);
    // const { value, currency, method, tag, description } = item[0];
    return (
      <form>
        <Inputs handleChange={ this.handleChange } states={ item[0] } />
        <Selects handleChange={ this.handleChange } states={ item[0] } />
        <button
          type="button"
          onClick={ () => editFinish(this.state) }
        >
          Editar despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = ({ wallet: { item } }) => ({
  item,
});

const mapDispatchToProps = (dispatch) => ({
  editFinish: (state) => dispatch(finishEdit(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Edit);

Edit.propTypes = {
  item: PropTypes.shape({
    value: PropTypes.string,
    currency: PropTypes.string,
    method: PropTypes.string,
    tag: PropTypes.string,
    description: PropTypes.string,
  }),
  editFinish: PropTypes.func,
}.isRequired;
