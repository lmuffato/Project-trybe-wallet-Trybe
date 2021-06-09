import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Currency from './Currency';
import Description from './Description';
import PaymentMethods from './PaymentMethods';
import Tags from './Tags';
import Value from './Value';
import { getCurrenciesThunkTest } from '../../actions';

class ExpenseTrackerForm extends Component {
  constructor() {
    super();

    this.state = {
      // id: 0,
      value: 0,
      description: '',
      currency: '',
      method: '',
      tag: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  handleChange(event) {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { value, tag, description, currency, method } = this.state;
    const { currencies } = this.props;
    const filteredCurrencies = Object.keys(currencies)
      .filter((curr) => curr !== 'USDT');

    return (
      <form>
        <Value
          value={ value }
          name="value"
          handleChange={ (e) => this.handleChange(e) }
        />
        <Description
          name="description"
          value={ description }
          handleChange={ (e) => this.handleChange(e) }
        />
        <Currency
          name="currency"
          currencies={ filteredCurrencies }
          value={ currency }
          handleChange={ (e) => this.handleChange(e) }
        />
        <PaymentMethods
          handleChange={ (e) => this.handleChange(e) }
          value={ method }
          name="method"
        />
        <Tags
          name="tag"
          value={ tag }
          handleChange={ (e) => this.handleChange(e) }
        />
        <button type="button">Adicionar despesa</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(getCurrenciesThunkTest()),
});

ExpenseTrackerForm.propTypes = {
  currencies: PropTypes.shape(PropTypes.string || PropTypes.object || PropTypes.array),
  getCurrencies: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseTrackerForm);
