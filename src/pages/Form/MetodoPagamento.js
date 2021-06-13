import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setMetodoAction } from '../../actions';

class MetodoPagamento extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { setMetodo } = this.props;
    setMetodo(target.value);
  }

  render() {
    return (
      <label htmlFor="select-payMethod">
        Método de pagamento
        <select id="select-payMethod" onChange={ this.handleChange }>
          <option value="dinheiro">Dinheiro</option>
          <option value="credito">Cartão de Crédito</option>
          <option value="debito">Cartão de Débito</option>
        </select>
      </label>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  setMetodo: (state) => dispatch(setMetodoAction(state)),
});

MetodoPagamento.propTypes = {
  setMetodo: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(MetodoPagamento);