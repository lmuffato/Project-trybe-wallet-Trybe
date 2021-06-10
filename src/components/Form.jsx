import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GenericInput from './GenericInput';
import GenericSelect from './GenericSelect';
import { fetchCurrency } from '../actions';

const inputsData = [
  { type: 'number', label: 'Valor', name: 'value' },
  { type: 'text', label: 'Descrição', name: 'description' },
];

const selectsData = (currencies) => ([
  { label: 'Moeda', name: 'currency', options: currencies },
  {
    label: 'Método de pagamento',
    name: 'method',
    options: [
      'selecione', 'Dinheiro', 'Cartão de crédito', 'Cartão de débito',
    ],
  },
  {
    label: 'Tag',
    name: 'tag',
    options: [
      'selecione', 'Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'],
  },
]);

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // currencies: [],
      // value: '',
      // currency: '',
      // description: '',
      // method: '',
      // tag: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { currencies } = this.props;
    return (
      <form className="form-wallet">
        {
          inputsData.map((input, index) => (
            <GenericInput
              type={ input.type }
              id={ input.name }
              label={ input.label }
              name={ input.name }
              testeId={ input.testeId }
              key={ index }
              onChange={ this.handleChange }
              value={ input.value }
            />
          ))
        }
        {
          selectsData(currencies).map((select, index) => (
            <GenericSelect
              label={ select.label }
              id={ select.name }
              name={ select.name }
              options={ select.options }
              key={ index }
              onChange={ this.handleChange }
              value={ select.value }
            />
          ))
        }
      </form>
    );
  }
}

Form.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string),
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchCurrency()),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
