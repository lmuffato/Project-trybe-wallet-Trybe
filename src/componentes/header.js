import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div>
        <header>
          <p data-testid="email-field">{}</p>
          <p data-testid="total-field">
            0
          </p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
      </div>
    );
  }
}

export default Header;
