import styled from 'styled-components';

export const Container = styled.header`
  align-items: center;
  color: white;
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
  padding: 1rem;

  h1 {
    font-size: 2.5rem;
  }

  div {
    align-items: center;
    display: flex;
    flex-direction: column;
  }
`;

export const Email = styled.p`
  font-size: 1.2rem;
`;

export const Expenses = styled(Email)``;
