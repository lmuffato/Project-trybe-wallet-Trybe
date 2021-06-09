import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class TotalExpense extends Component {
  render() {
    const { expenses } = this.props;
    if (expenses.length < 1) return <div />;
    return (
      <div>
        <table>
          {expenses.map((expend) => (
            <tr key={ expend.id }>
              <td>{expend.desciption}</td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}

const mapStateToProps = ({ wallet: { expenses } }) => ({
  expenses,
});

TotalExpense.propTypes = {
  // userGetCurrencie: PropTypes.func.isRequired,
  // userAddCurrencie: PropTypes.func.isRequired,
  // email: PropTypes.string.isRequired,
  // isloading: PropTypes.bool.isRequired,
  expenses: PropTypes.arrayOf([{}]).isRequired,
};

export default connect(mapStateToProps)(TotalExpense);
