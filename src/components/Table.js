import React from 'react';
import ths from '../func/inputs';
import TBody from './TBody';

const Table = () => (
  <table>
    <thead>
      <tr>
        {ths.th.map((th) => (
          <th key={ th }>{th}</th>
        ))}
      </tr>
    </thead>
    <TBody />
  </table>
);
export default Table;
