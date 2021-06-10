import React, { Component } from 'react';
import Tbody from './Tbody';
import Thead from './Thead';

class Table extends Component {
  render() {
    return (
      <div>
        <table>
          <Thead />
          <Tbody />
        </table>
      </div>
    );
  }
}

export default Table;
