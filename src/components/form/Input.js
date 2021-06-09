/* eslint-disable react/prop-types */
import React from 'react';

function Input(props) {
  const { inputs } = props;
  return (
    <ul>
      <li>
        { inputs.forEach((attributes, index) => (
          <input
            { ...attributes }
            key={ index }
          />
        )) }
      </li>
    </ul>
  );
}

export default Input();
