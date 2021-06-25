import React from 'react';
import PropTypes from 'prop-types';

class FormsInput extends React.Component {
  render() {
    const { onChange } = this.props;
    return (
      <>
        <label htmlFor="input-valor">
          Valor
          <input
            type="number"
            id="input-valor"
            name="value"
            onChange={ onChange }
          />
        </label>
        <label htmlFor="input-descrição">
          Descrição
          <input
            type="text"
            id="input-descrição"
            name="description"
            onChange={ onChange }
          />
        </label>
      </>
    );
  }
}

FormsInput.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default FormsInput;
