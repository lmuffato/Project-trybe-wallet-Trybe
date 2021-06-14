import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ExpenseTag extends Component {
  // constructor(_props) {
  //   super(_props);
  // }

  render() {
    const { handleChange, value: tag } = this.props;
    return (
      <label htmlFor="tag">
        Tag
        <select id="tag" value={ tag } onChange={ handleChange }>
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }
}

ExpenseTag.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default ExpenseTag;
