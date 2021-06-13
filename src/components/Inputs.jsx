import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Inputs extends React.Component {
  render() {
    const { props: { handleChange, states: { value, description } } } = this;
    return (
      <>
        <label htmlFor="expense">
          Valor:
          <input
            type="text"
            name="value"
            id="expense"
            className="field"
            defaultValue={ value }
            data-testid="value-input"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            type="text"
            name="description"
            id="description"
            className="field"
            defaultValue={ description }
            data-testid="description-input"
            onChange={ handleChange }
          />
        </label>
      </>
    );
  }
}

export default connect(null, null)(Inputs);

Inputs.propTypes = {
  handleChange: PropTypes.func,
  state: PropTypes.shape({
    value: PropTypes.string,
    description: PropTypes.string,
  }),
}.isRequired;
