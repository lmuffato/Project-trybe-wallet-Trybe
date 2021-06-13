import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Heading4 from './Heading4';

export default class Header extends Component {
  render() {
    const { email, expenseMount, coin } = this.props;
    return (
      <>
        <Heading4 dataTestid="email-field" text={ email } />
        <Heading4 dataTestid="total-field" text={ expenseMount } />
        <Heading4 dataTestid="header-currency-field" text={ coin } />
      </>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string,
  expenseMount: PropTypes.string,
  coin: PropTypes.string,
}.isRequired;
