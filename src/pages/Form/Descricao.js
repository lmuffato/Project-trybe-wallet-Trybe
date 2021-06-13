import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setDescAction } from '../../actions';

class Descricao extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { setDescricao } = this.props;
    setDescricao(target.value);
  }

  render() {
    return (
      <label htmlFor="input-desc">
        Descrição
        <input type="text" id="input-desc" onChange={ this.handleChange } />
      </label>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setDescricao: (state) => dispatch(setDescAction(state)),
});

Descricao.propTypes = {
  setDescricao: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Descricao);
