import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  0%   {color:red; bottom:0px;}
  25%  {color:yellow; bottom:10px;}
  50%  {color:blue; bottom:20px;}
  75%  {color:green; bottom:10px;}
  100% {color:red; bottom:0px;}
`;

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-family: 'Roboto', sans-serif;

  height: 100vh;

  h2 {
    color: #969696;
  }
`;

export const Animation = styled.div`
  display: inline-block;
  position: relative;
  animation: ${rotate} 1.2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;
