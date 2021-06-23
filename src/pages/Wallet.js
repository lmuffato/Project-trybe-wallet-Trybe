import React from 'react';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <header>
          <input
            type="email"
            data-testid="email-field"
          />
          <input
            type="text"
            data-testid="value-input"
          />
          <input
            type="text"
            data-testid="currency-input"
          />
          <input
            type="text"
            data-testid="method-input"
          />
          <input
            type="text"
            data-testid="tag-input"
          />
          <input
            type="text"
            data-testid="description-input"
          />
          <button
            type="button"
          >
            Editar Despesa
          </button>
        </header>
        <input
          type="button"
          value="Editar"
          data-testid="edit-btn"
        />
      </div>
    );
  }
}

export default Wallet;
