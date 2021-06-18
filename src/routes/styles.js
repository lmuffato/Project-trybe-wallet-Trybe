import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const NavBar = styled.nav`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  border-radius: 20px 20px 0 0;
  width: 100%;
  height: 10%;
`;

export const NavIcon = styled(NavLink).attrs(() => ({
  strict: true,
  activeStyle: {
    color: '#3E3E3E',
  },
}))`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.9rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  color: #A5A5A5;
  span {
    margin-top: 5px;
  }
`;
