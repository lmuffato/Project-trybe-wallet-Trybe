import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Form extends React.Component {
  render() {
    const { email, total } = this.props;
    let initialValue = 0;
    if (total !== initialValue) {
      initialValue = total;
    }
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
            value="0"
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
  total: state.wallet.totalGasto,
});

Form.propTypes = {
  email: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, null)(Form);
