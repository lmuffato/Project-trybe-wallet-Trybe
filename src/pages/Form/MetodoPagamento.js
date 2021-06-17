import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setMetodoAction } from '../../actions';

class MetodoPagamento extends Component {
  constructor() {
    super();

    this.state = {
      method: 'Dinheiro',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { setMetodo } = this.props;
    setMetodo(target.value);

    // this.setState({
    //   method: target.value,
    // });
  }

  render() {
    const { method } = this.state;
    return (
      <label htmlFor="Método">
        Método de pagamento
        <select id="Método" onChange={ this.handleChange } value={ method }>
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de Crédito</option>
          <option value="Cartão de débito">Cartão de Débito</option>
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
