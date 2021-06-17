import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setTagAction } from '../../actions';

class Tag extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { setTag } = this.props;
    setTag(target.value);
  }

  render() {
    return (
      <label htmlFor="tag">
        Tag
        <select id="tag" onChange={ this.handleChange }>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Alimentação">Alimentação</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setTag: (state) => dispatch(setTagAction(state)),
});

Tag.propTypes = {
  setTag: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Tag);
