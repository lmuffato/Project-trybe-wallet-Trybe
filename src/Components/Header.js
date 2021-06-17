import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { emailget, totalCurrency } = this.props;
    if (!totalCurrency) {
      return (
        <>
          <p
            data-testid="email-field"
          >
            {`${emailget}`}
          </p>
          <p
            data-testid="total-field"
          >
            0
          </p>
          <p
            data-testid="header-currency-field"
          >
            BRL
          </p>
        </>
      );
    }
    return (
      <>
        <p
          data-testid="email-field"
        >
          {`${emailget}`}
        </p>
        <p
          data-testid="total-field"
        >
          {`${totalCurrency === 0 ? '0' : totalCurrency}`}
        </p>
        <p
          data-testid="header-currency-field"
        >
          BRL
        </p>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  emailget: state.user.email,
  totalCurrency: state.wallet.totalCurrency,
});

Wallet.propTypes = {
  wallet: PropTypes.arrayOf(PropTypes.object),
  totalCurrency: PropTypes.number.isRequired,
  emailget: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps, null)(Wallet);
