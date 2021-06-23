import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { expensesTag } from '../../actions/index';

class ExpenseTag extends Component {
  render() {
    const { inputTag } = this.props;
    return (
      <div>
        <label htmlFor="tag">
          tag
          <select
            id="tag"
            name="tag"
            onChange={ (event) => {
              inputTag(event.target.value);
            } }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenseTag: state.wallet2.tag,
});

const mapDispatchToProps = (dispatch) => ({
  inputTag: (tag) => dispatch(expensesTag(tag)),
});

ExpenseTag.propTypes = {
  inputTag: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseTag);
