import React from 'react';
import PropTypes from 'prop-types';

function Tags({ name, value, handleChange }) {
  // const [tag, setTag] = useState('');

  // const handleChange = (event) => {
  //   const { value } = event.target;
  //   setTag(value);
  //   console.log(value);
  // };

  return (
    <label htmlFor="tags">
      Tag
      <select
        name={ name }
        id="tags"
        value={ value }
        onChange={ handleChange }
      >
        <option value=" ">Selecione</option>
        <option value="food">Alimentação</option>
        <option value="leisure">Lazer</option>
        <option value="work">Trabalho</option>
        <option value="transportation">Transporte</option>
        <option value="health">Saúde</option>
      </select>
    </label>
  );
}

Tags.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Tags;

// Source:
// https://pt.stackoverflow.com/questions/404856/como-pegar-o-valor-do-select
