import React from 'react';
import { connect } from 'react-redux';
import { choicedProduct } from '../actions/index';

class ButtonAddDespesa extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    const { sendProduct, valor, descricao, moeda, metodo, categoria} = this.props;
    const product = { valor, descricao, moeda, metodo, categoria };
    sendProduct(product);
    //console.log(product);
    //console.log(numberProducts);
  }

  render() {
    const { numberProducts, valor, descricao, moeda, metodo, categoria } = this.props;
    console.log(numberProducts.length);
    return (
      <button type="submit" onClick={ this.handleClick }>Adicionar despesa</button>
    );
  }
}

const mapStateToProps = (state) => ({
  numberProducts: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  sendProduct: (product) => dispatch(choicedProduct(product)),
});

ButtonAddDespesa.propTypes = {
  //numberProducts: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ButtonAddDespesa);
