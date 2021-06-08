import React from 'react';
import { useSelector } from 'react-redux';

import elements from '../services/inputs';
import TBody from './TBody';

const Table = () => {
  const { expenses } = useSelector((state) => state.wallet);

  return (
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
};

export default Table;
