import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Form from '../components/form/Form';
import Header from '../components/Header';
import thunkFetch from '../actions';
import Table from '../components/table/Table';

function Wallet() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(thunkFetch());
  }, [dispatch]);

  return (
    <div>
      TrybeWallet
      <Header />
      <Form />
      <Table />
    </div>
  );
}

export default Wallet;
