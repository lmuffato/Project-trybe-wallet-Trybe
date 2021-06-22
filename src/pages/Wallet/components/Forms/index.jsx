import React from 'react';

import { FormField } from './styles';
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
    return (
      <FormField>
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
            return (
              <Select
                key={ select.text }
                { ...select }
                value={ value }
                onChange={ this.handleChange }
              />
            );
          })
        }
      </FormField>
    );
  }
}

export default Forms;
