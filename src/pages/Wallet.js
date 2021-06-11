import React from 'react';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <section>
        <header>
          <h4 data-testid="email-field">
            { email }
          </h4>
          <form>
            <label htmlFor="totalValue">
              {' '}
              Total Value
              <input type="number" data-testid="total-field" id="totalValue" value="0" />
            </label>
            <label htmlFor="currency">
              Currency
              <input type="dropdown" data-testid="header-currency-field" value="BRL" />
            </label>
          </form>

        </header>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Wallet);
