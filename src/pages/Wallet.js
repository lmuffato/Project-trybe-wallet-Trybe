import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AddForm from '../components/addform';

class Wallet extends React.Component {
  render() {
    const { getEmailS } = this.props;
    return (
      <main>
        <header>
          <h5 data-testid="email-field">
            {getEmailS}
          </h5>
          <h5 data-testid="total-field">
            Valor: 0
          </h5>
          <h5 data-testid="header-currency-field">
            Câmbio utilizado: BRL
          </h5>
        </header>
        <AddForm />
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  getEmailS: state.user.email,
});

Wallet.propTypes = {
  getEmailS: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Wallet);
