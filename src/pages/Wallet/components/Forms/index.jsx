import React from 'react';
import PropTypes, { arrayOf } from 'prop-types';
import { connect } from 'react-redux';

import styles from './styles.module.css';
import { inputs, selects } from '../../../../helpers/inputData';

import Input from '../../../../components/Input';
import Select from '../../../../components/Select';

class Forms extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.getState = this.getState.bind(this);

    this.state = {
      price: '',
      description: '',
      currencie: '',
      payment: '',
      tag: '',
    };
  }

  getState() {
    const {
      price,
      description,
      currencie,
      payment,
      tag,
    } = this.state;

    return {
      price,
      description,
      currencie,
      payment,
      tag,
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { currencies } = this.props;

    return (
      <form className={ styles.formField }>
        {
          inputs.map((input) => {
            const { [input.name]: value } = this.getState();
            return (
              <Input
                key={ input.name }
                { ... input }
                value={ value }
                onChange={ this.handleChange }
              />
            );
          })
        }

        {
          selects.map((select) => {
            const { [select.name]: value } = this.getState();
            let { options } = select;

            if (!options) {
              options = currencies.map((currencie) => ({
                text: currencie.code,
                value: currencie.code,
              }));
            }

            return (
              <Select
                key={ select.text }
                { ...select }
                options={ options }
                value={ value }
                onChange={ this.handleChange }
              />
            );
          })
        }
      </form>
    );
  }
}

Forms.propTypes = {
  currencies: arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(Forms);
