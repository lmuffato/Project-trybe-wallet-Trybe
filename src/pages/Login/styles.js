import styled from 'styled-components';
import { GiWallet } from 'react-icons/gi';

const fontFamily = '\'Roboto\', sans-serif';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100vh;
`;

export const Logo = styled(GiWallet)`
  color: #2a9d8f;

  height: 98.12px;
  width: 96.78px;
`;

export const LoginSection = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-top: 3rem;

  height: 17.5rem;
  width: 339px;
`;

export const InputBox = styled.label`
  display: flex;
  justify-content: flex-end;

  font-family: ${fontFamily};

  height: 3.2rem;

  input {
    font-size: 1.3rem;
    padding: 1.5rem;
    width: 100%;
    border-radius: 10px;
    font-family: ${fontFamily};
    
    ::placeholder {
      color: #535353;
      opacity: 1;
    }
  }
`;

export const Button = styled(InputBox).attrs(() => ({
  type: 'submit',
}))`
  align-items: center;
  justify-content: center;

  margin-top: 1rem;

  border-radius: 10px;

  background-color: #2a9d8f;
  
  font-size: 1.3rem;
  font-weight: 700;

  span {
    margin-right: 10px;
  }
`;
