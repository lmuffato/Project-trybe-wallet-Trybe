import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Form extends React.Component {
  render() {
    const { email } = this.props;
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
});

Form.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Form);
