import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import InputOne from './inputs/InputOne';
import InputTwo from './inputs/InputTwo';

class Form extends Component {
  constructor() {
    super();
    this.handleChangeInput = this.handleChangeInput(this);
    this.state = {
      value: '',
      descricao: '',
      moeda: '',
      pagamento: '',
      tag: '',
    };
  }

  handleChangeInput({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { currencies } = this.props;
    const { value, descricao, moeda, pagamento, tag } = this.state;
    return (
      <form>
        <InputOne
          currencies={ currencies }
          handleChangeInput={ this.handleChangeInput }
          value={ value }
          descricao={ descricao }
          moeda={ moeda }
        />
        <InputTwo
          handleChangeInput={ this.handleChangeInput }
          pagamento={ pagamento }
          tag={ tag }

        />
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(Form);

Form.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};
