import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrenciesThunk } from '../../actions';

function Currency({ name, handleChange, value, currencies }) {
  // const { currencies } = wallet;
  // const [currencyType, setCurrencyType] = useState('');

  // const handleChange = (event) => {
  //   const { value } = event.target;
  //   // const { addCurrency } = inputValues;
  //   setCurrencyType(value);
  //   // addCurrency(currencyType);
  //   console.log(value);
  // };

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getCurrenciesThunk());
  // }, [dispatch]);

  return (
    <label htmlFor="currency">
      Moeda
      <select
        name={ name }
        id="currency"
        value={ value }
        onChange={ handleChange }
      >
        { currencies.map((currency) => (
          <option value={ currency } key={ currency }>{currency}</option>
        ))}
      </select>
    </label>
  );
}

const mapStateToProps = (state) => ({
  wallet: {
    currencies: state.wallet.currencies,
  },
});

const mapDispatchToProps = (dispatch) => ({
  getCurrenciesThunk: () => dispatch(getCurrenciesThunk()),
  // addCurrency: (currency) => dispatch(addCurrencyType(currency)),
});

Currency.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string),
  handleChange: PropTypes.func,
  name: PropTypes.string,
  value: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Currency);
// export default Currency;

// Referência:
// sintaxe correta da tag select: https://www.w3schools.com/tags/tag_select.asp
