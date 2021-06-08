import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../Header';

const Wallet = () => {
  const email = useSelector((state) => state.user.email);

  return (
    <>
      <Header />
      <h2>
        bem vindo
        {email}
      </h2>
    </>
  );
};

export default Wallet;
