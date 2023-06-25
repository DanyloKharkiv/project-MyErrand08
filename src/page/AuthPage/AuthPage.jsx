import React from 'react';
import { RegistrationForm } from '../../components/AuthForm/RegistrationForm/RegistrationForm';
import { useParams } from 'react-router-dom';
import { LoginForm } from '../../components/AuthForm/LoginForm/LoginForm';
import { FormWrapper } from './AuthPage.Styled';

const AuthPage = () => {
  const { id } = useParams();
  return (
    <div>
      <FormWrapper>
        {id === 'login' && <LoginForm />}
        {id === 'register' && <RegistrationForm />}
      </FormWrapper>
    </div>
  );
};

export default AuthPage;



