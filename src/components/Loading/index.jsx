import React from 'react';
import { FaRegMoneyBillAlt } from 'react-icons/fa';

import { Container, Animation } from './styles';

function Loading() {
  return (
    <Container>
      <Animation>
        <FaRegMoneyBillAlt color="#2A9D8F" size="4rem" />
      </Animation>
      <h2>LOADING...</h2>
    </Container>
  );
}

export default Loading;
