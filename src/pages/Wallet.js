import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import Form from '../components/Form';
import Table from '../components/Table';

const Wallet = () => {
  const email = useSelector((state) => state.user.email);
  const total = useSelector((state) => state.wallet.total);
  const expenses = useSelector((state) => state.wallet.expenses);
  const loading = useSelector((state) => state.wallet.loading);
  return (
    <>
      <Header email={ email } total={ total } />
      <Form />
      <Table expenses={ expenses } loading={ loading } />
    </>);
};

export default Wallet;
