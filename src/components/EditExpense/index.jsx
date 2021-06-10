import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Currency from '../ExpenseTrackerForm/Currency';
import Description from '../ExpenseTrackerForm/Description';
import PaymentMethods from '../ExpenseTrackerForm/PaymentMethods';
import Tags from '../ExpenseTrackerForm/Tags';
import Value from '../ExpenseTrackerForm/Value';

export class EditExpense extends Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      description: '',
      currency: '',
      method: '',
      tag: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { currencies } = this.props;
    const filteredCurrencies = Object.keys(currencies)
      .filter((curr) => curr !== 'USDT');

    return (
      <form>
        <Value
          value={ value }
          name="value"
          handleChange={ (e) => this.handleChange(e) }
          data-testid="value-input"
        />
        <Description
          value={ description }
          name="description"
          handleChange={ (e) => this.handleChange(e) }
          data-testid="description-input"
        />
        <Currency
          name="currency"
          currencies={ filteredCurrencies }
          value={ currency }
          handleChange={ (e) => this.handleChange(e) }
          data-testid="currency-input"
        />
        <PaymentMethods
          handleChange={ (e) => this.handleChange(e) }
          value={ method }
          name="method"
          data-testid="method-input"
        />
        <Tags
          name="tag"
          value={ tag }
          handleChange={ (e) => this.handleChange(e) }
          data-testid="tag-input"
        />
        <button type="button">Editar despesa</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

EditExpense.propTypes = {
  currencies: PropTypes.shape(PropTypes.string || PropTypes.object || PropTypes.array),
}.isRequired;

export default connect(mapStateToProps, null)(EditExpense);
