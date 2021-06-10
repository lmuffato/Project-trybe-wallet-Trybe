import React from 'react';
import PropTypes from 'prop-types';

class Description extends React.Component {
  render() {
    const { description, handleDescription } = this.props;
    return (
      <label htmlFor="description">
        Descrição:
        <input
          type="text"
          id="description"
          value={ description }
          onChange={ handleDescription }
        />
      </label>
    );
  }
}

Description.propTypes = {
  description: PropTypes.string,
}.isRequired;

export default Description;
