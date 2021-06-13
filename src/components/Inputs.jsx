import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Inputs extends React.Component {
  render() {
    const { handleChange, states: { value, description } } = this.props;
    return (
      <>
        <label htmlFor="expense">
          Valor:
          <input
            type="text"
            name="value"
            id="expense"
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
