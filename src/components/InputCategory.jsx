import React from 'react';

class InputCategory extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="tag">
          Tag
          <select
            className="input"
            name="tag"
            id="tag"
          >
            <option value="alimentação">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saude">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

export default InputCategory;
