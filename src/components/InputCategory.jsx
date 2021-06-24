import React from 'react';
import PropTypes from 'prop-types';

class InputCategory extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <form>
        <label htmlFor="tag">
          Tag
          <select
            value={ value }
            onChange={ onChange }
            className="input"
            name="tag"
            id="tag"
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

InputCategory.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default InputCategory;
