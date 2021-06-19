import React, { Component } from 'react';

export default class Tags extends Component {
  render() {
    return (
      <label htmlFor="Tags">
        Tag
        <select id="Tags">
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
      </label>
    );
  }
}
