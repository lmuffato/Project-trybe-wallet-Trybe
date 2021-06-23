import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class SumExpenses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // input1: '',
      // input2: '',
      // imputToClean: '',
    };
    // this.inputFunc1 = this.inputFunc1.bind(this);
    // this.inputFunc2 = this.inputFunc2.bind(this);
    // this.botao = this.botao.bind(this);
  }

  // botao() {
  // const { wallet2 } = this.props;
  // const { input2, input1, imputToClean } = this.state;
  // Limpando o campo 1 - Limpando pelo endereço do target
  // imputToClean.value = '';
  // Limpando o stado
  // this.setState({ input1: '' });
  // this.setState({ imputToClean: '' });

  // Limpando o campo 2 - Limpando pelo estado
  // this.setState({ input2: '' });
  // console.log(event);
  // console.log(wallet2);
  // }

  // inputFunc1(event) {
  // const { input1 } = this.state;
  // Capturando o valor do input 1
  // this.setState({ input1: event.target.value });
  // Capturando o endereço do evento e colocando em um estatus
  // this.setState({ imputToClean: event.target });
  // }

  // inputFunc2(event) {
  // const { input2 } = this.state;
  // this.setState({ input2: event.target.value });
  // }

  render() {
    const { input2 } = this.state;
    const { actualTotalExpenses } = this.props;
    return (
      <div>
        <header data-testid="total-field">{actualTotalExpenses}</header>
        <button type="button" onClick={ this.botao }>submeter</button>
        <input type="text" onChange={ (event) => { this.inputFunc1(event); } } />
        <input
          type="text"
          value={ input2 }
          onChange={ (event) => { this.inputFunc2(event); } }
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  actualTotalExpenses: state.wallet2.totalExpenses,
});

SumExpenses.propTypes = {
  actualTotalExpenses: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(SumExpenses);
