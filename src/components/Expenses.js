import React from 'react';

class Expenses extends React.Component {
  constructor() {
    super();
    this.state = {
      initialValue: 0,
    };
  }

  render() {
    const { initialValue } = this.state;
    return (
      <div>
        <p data-testid="total-field">
          {`Total: ${initialValue}`}
        </p>
        <p data-testid="header-currency-field">BRL</p>
      </div>
    );
  }
}

export default Expenses;
