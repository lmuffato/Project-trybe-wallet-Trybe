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

  height: 7.5rem;
  width: 339px;
`;

export const UserName = styled.label`
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

    border: ${({ isEmpty }) => (isEmpty ? '1px solid #EB2D2D' : 'none')};
    
    ::placeholder {
      color: #535353;
      opacity: 1;
    }
  }
`;

export const Required = styled.span`
  position: absolute;
  margin-right: 1rem;

  align-self: center;

  color: #EB2D2D;
`;

export const Button = styled(UserName).attrs(() => ({
  type: 'submit',
}))`
  align-items: center;
  justify-content: center;

  border-radius: 10px;

  background-color: #2a9d8f;
  
  font-size: 1.3rem;
  font-weight: 700;

  span {
    margin-right: 10px;
  }
`;
