import React, { Component } from 'react';
import { connect } from 'react-redux';

class editCurrency extends Component {
  render() {
    return (
      <div>
        Moeda
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(editCurrency);
