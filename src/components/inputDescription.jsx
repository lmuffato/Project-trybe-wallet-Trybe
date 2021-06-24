import React from 'react';

class InputDescription extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="descrição">
          Descrição
          <input
            className="input"
            type="text"
            name="descrição"
            id="descrição"
          />
        </label>
      </form>
    );
  }
}

export default InputDescription;
