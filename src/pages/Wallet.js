import React from 'react';
import { connect } from 'react-redux';
import AddCurrencies from '../components/AddCurrencies';
import { fetchAPI } from '../reducers/api';

class Wallet extends React.Component {
  componentDidMount() {
    const { fetchApiThunk } = this.props;
    fetchApiThunk();
  }

  render() {
    const { userEmail } = this.props;
    return (
      <main>
        <header className="header-wallet">
          <img src="https://www.abcdacomunicacao.com.br/wp-content/uploads/Trybe_logo-baixa.png" alt="trywallet logo" />
          <div className="user-info">
            <p data-testid="email-field">{ userEmail }</p>
          </div>
        </header>
        <AddCurrencies />
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchApiThunk: () => dispatch(fetchAPI()),
});

const mapStateToProps = (state) => ({
  userEmail: state.user.email });

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
