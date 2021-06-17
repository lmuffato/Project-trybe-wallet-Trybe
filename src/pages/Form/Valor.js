import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setValorAction } from '../../actions';

class Valor extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { setValor } = this.props;
    setValor((target.value));
  }

  render() {
    return (
      <label htmlFor="input-value">
        Valor
        <input type="number" id="input-value" onChange={ this.handleChange } />
      </label>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setValor: (state) => dispatch(setValorAction(state)),
});

Valor.propTypes = {
  setValor: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Valor);
