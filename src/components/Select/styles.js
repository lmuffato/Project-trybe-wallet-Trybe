import styled from 'styled-components';

export const SelectBox = styled.label`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;

  font-family: 'Roboto', sans-serif;
  font-size: 1.2rem;
  color: white;

  height: 3.2rem;
`;

export const SelectField = styled.select`
  margin-top: 0.3rem;
  font-size: 1.3rem;
  padding: 1.5rem;
  width: 100%;
  border-radius: 10px;
  
  ::placeholder {
    color: #535353;
    opacity: 1;
  }
`;
