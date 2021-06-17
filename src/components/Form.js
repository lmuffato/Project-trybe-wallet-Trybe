import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAPI } from '../actions/index';
import InputOne from './inputs/InputOne';
import InputTwo from './inputs/InputTwo';

class Form extends Component {
  constructor() {
    super();
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.state = {
      value: '',
      descricao: '',
      moeda: 'USD',
      pagamento: 'Dinheiro',
      tag: 'Alimentação',
    };
  }

  componentDidMount() {
    const { fetchApi } = this.props;
    fetchApi();
  }

  handleChangeInput({ target: { name, value } }) {
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
const mapDispatchToProps = (dispatch) => ({
  fetchApi: () => dispatch(fetchAPI()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Form);
Form.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  fetchApi: PropTypes.func.isRequired,
};
