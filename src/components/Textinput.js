import React from 'react';
import PropTypes from 'prop-types';

class Textinput extends React.Component {
  render() {
    const { onChange } = this.props;
    return (
      <>
        <label htmlFor="value">
          Valor
          <input
            type="text"
            name="value"
            id="value"
            onChange={ onChange }
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            type="text"
            name="description"
            id="description"
            onChange={ onChange }
          />
        </label>
      </>
    );
  }
}

Textinput.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Textinput;
