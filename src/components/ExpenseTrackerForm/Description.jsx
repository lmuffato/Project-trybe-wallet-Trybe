import React from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { addDescription } from '../actions';

function Description({ name, value, handleChange }) {
  // const [description, setDescription] = useState('');

  // const handleChange = (event) => {
  //   const { value } = event.target;
  //   const { addingDescription } = props;
  //   setDescription(value);
  //   addingDescription(description);
  //   console.log(value);
  // };

  return (
    <label htmlFor="description">
      Descrição
      <input
        type="text"
        name={ name }
        id="description"
        value={ value }
        onChange={ handleChange }
      />
    </label>
  );
}

// const mapDispatchToProps = (dispatch) => ({
//   addingDescription: (description) => dispatch(addDescription(description)),
// });

Description.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

// export default connect(null, mapDispatchToProps)(Description);
export default Description;
