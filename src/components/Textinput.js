import React from 'react';

class Textinput extends React.Component {
  render() {
    return (
      <>
        <label htmlFor="value">
          Valor
          <input
            type="text"
            name="value"
            id="value"
          />
        </label>
        <label htmlFor="details">
          Descrição
          <input
            type="text"
            name="details"
            id="details"
          />
        </label>
      </>
    );
  }
}

export default Textinput;
