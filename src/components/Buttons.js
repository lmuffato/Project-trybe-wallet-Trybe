import React from 'react';

const Buttons = (id) => (
  <td>
    <button
      type="button"
      data-testid="edit-btn"
      name={ id }
    >
      Editar
    </button>
    <button
      type="button"
      data-testid="delete-btn"
      name={ id }
    >
      Excluir
    </button>
  </td>
);

export default Buttons;
