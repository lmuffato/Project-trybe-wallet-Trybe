import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Heading4 extends Component {
  render() {
    const { dataTestid, text } = this.props;
    return <p data-testid={ dataTestid }>{ text }</p>;
  }
}

Heading4.propTypes = {
  dataTestid: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
