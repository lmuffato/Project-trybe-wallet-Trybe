import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <input type="text" name="text" id="text" />
      </div>
    );
  }
}
