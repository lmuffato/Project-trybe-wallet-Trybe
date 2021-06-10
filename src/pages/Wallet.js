import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Form from '../components/form/Form';
import Header from '../components/Header';
import thunkFetch from '../actions';

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
    </div>
  );
}

export default Wallet;
