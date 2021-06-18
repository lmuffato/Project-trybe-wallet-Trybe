import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FiArrowRight } from 'react-icons/fi';

// import { getUserThunk } from '../../store/actions';

import { Container, Logo, UserName, Required, Button, LoginSection } from './styles';

// Pensamento do momento: Alterar as actions, criar a action thunk, alterar os redcuers;
function Login() {
  const dispatch = useDispatch();

  const { error } = useSelector(({ user }) => user);
  const history = useHistory();
  const [userName, setUserName] = useState('');
  const [isEmpty, setIsEmpty] = useState(error);

  const handleChange = ({ target: { value } }) => {
    setUserName(value);
    setIsEmpty(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (userName === '') {
      dispatch({ type: 'RECEIVED_USER_ERROR', payload: 'Campo obrigatório' });
      return setIsEmpty(true);
    }
    setUserName('');
    // dispatch(getUserThunk(userName));
    history.push('/');
  };

  return (
    <Container>
      <Logo />

      <LoginSection>
        <UserName isEmpty={ isEmpty }>
          <input
            value={ userName }
            onChange={ (event) => handleChange(event) }
            type="text"
            placeholder="Usuário"
          />
          {isEmpty ? <Required>{error}</Required> : ''}
        </UserName>

        <Button as="button" onClick={ handleSubmit }>
          <span>ENTRAR</span>
          {' '}
          <FiArrowRight />
        </Button>
      </LoginSection>
    </Container>
  );
}

export default Login;
