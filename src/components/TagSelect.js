import React from 'react';
import PropTypes from 'prop-types';

class TagSelect extends React.Component {
  render() {
    const { onChange } = this.props;
    return (
      <label htmlFor="tag">
        Tag
        <select onChange={ onChange } id="tag" name="tag">
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

TagSelect.propTypes = {
  onChange: PropTypes.func.isRequired,
};
export default TagSelect;
