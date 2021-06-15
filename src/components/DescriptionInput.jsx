import React, { Component } from 'react';

class DescriptionInput extends Component {
  render() {
    const { handleChange, description } = this.props;
    return (
      <label htmlFor="desc">
        Descrição
        <input aria-label="descrição" type="text" name="description" onChange={ handleChange } value={ description } />
      </label>
    );
  }
}

export default DescriptionInput;
