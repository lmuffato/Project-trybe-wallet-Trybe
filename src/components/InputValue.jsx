import React from 'react';

class InputValue extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input
            type="text"
            name="valor"
            id="valor"
          />
        </label>
      </form>
    );
  }
}

export default InputValue;
