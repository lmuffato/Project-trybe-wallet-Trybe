import React from 'react';
import elements from '../services/inputs';
import TBody from './TBody';

const Table = () => (
  <table>
    <thead>
      <tr>
        {elements.th.map((th) => (
          <th key={ th }>{th}</th>
        ))}
      </tr>
    </thead>
    <TBody />
  </table>
);

export default Table;
