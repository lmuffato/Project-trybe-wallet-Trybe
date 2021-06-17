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
    const { emailget } = this.props;
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
}

const mapStateToProps = (state) => ({
  emailget: state.user.email,
});

Wallet.propTypes = {
  emailget: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps, null)(Wallet);
