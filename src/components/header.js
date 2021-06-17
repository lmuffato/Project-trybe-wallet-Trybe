import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Form extends React.Component {
  render() {
    const { email, total } = this.props;
    let sum = 0;
    total.map((e) => {
      const { currency, exchangeRates } = e;
      const cot = Object.values(exchangeRates).find((el) => el.code === currency);
      sum += (Math.round(e.value * 100) / 100) * cot.ask;
      return cot;
    });
    return (
      <div>
        <span data-testid="email-field">
          {email}
        </span>
        <span>
          TotalDeGastos
          <input
            data-testid="total-field"
            readOnly
            name="total-expense"
            value={ sum }
          />
        </span>
        <span
          data-testid="header-currency-field"
        >
          BRL
        </span>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  total: state.wallet.expenses,
});

Form.propTypes = {
  email: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, null)(Form);
