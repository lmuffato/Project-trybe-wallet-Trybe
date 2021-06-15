import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';

class Input extends Component {
  constructor(props) {
    super(props);
    const { name } = this.props;
    this.state = { [name]: '' };
  }

  handleChange(field, value) {
    // const { dispatchInput } = this.props;
    this.setState({ [field]: value });
  }

  render() {
    const objState = this.state;
    const { type, htmlFor, name, textLabel, id } = this.props;
    return (
      <label htmlFor={ htmlFor }>
        { textLabel }
        <input
          value={ Object.values(objState) }
          type={ type }
          name={ name }
          onChange={ (event) => this.handleChange(name, event.target.value) }
          id={ id }
        />
      </label>
    );
  }
}

// const mapDispatchToProps = (dispatch) => ({
// dispatchInput: (state) => dispatch(),
// });

Input.propTypes = {
  type: PropTypes.string.isRequired,
  textLabel: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Input;
