import {
  FormikStyle,
  FormLogin,
  FeedbackFormGroup,
  InputEmail,
  InputPassword,
  Btnwrapper,
  BtnLogIn,
  PasswordWrapper,
  ToggleShowPasword,
  StyleErrorMessage,
  Error,
  Link,
} from './LoginForm.Styled';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { logIn } from '../../../redux/auth/authOperation';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { BsEye, BsEyeSlash } from 'react-icons/bs';


const initialValues = {
  email: '',
  password: '',
};

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email')
    .test('email-format', 'Invalid email format', (value) => {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailRegex.test(value);
    })
    .required(),
  password: yup.string().min(8).max(64).required(),
});

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (values, { resetForm }) => {
    try {
      dispatch(logIn(values));
      resetForm();
    } catch (error) {
      console.log(error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <>
      <FormikStyle
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <FormLogin>
          <Link>
            <NavLink to="/auth/register" style={{ color: '#ffffff4d' }}>
              Registration
            </NavLink>
            <NavLink to="/auth/login" style={{ color: '#ffffff' }}>
              Log In
            </NavLink>
          </Link>
          <FeedbackFormGroup>
            <InputEmail
              type="email"
              name="email"
              placeholder="Enter your email"
            />
            <StyleErrorMessage name="email">
              {(msg) => <Error>{msg}</Error>}
            </StyleErrorMessage>
          </FeedbackFormGroup>
          <FeedbackFormGroup>
            <PasswordWrapper>
              <InputPassword
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Confirm a password"
              />
              <ToggleShowPasword onClick={togglePasswordVisibility}>
                {showPassword ? (
                  <BsEyeSlash
                    color="#ffffff4d"
                    style={{ width: 18, height: 18 }}
                  />
                ) : (
                  <BsEye color="#ffffff4d" style={{ width: 18, height: 18 }} />
                )}
              </ToggleShowPasword>
            </PasswordWrapper>
            <StyleErrorMessage name="password">
              {(msg) => <Error>{msg}</Error>}
            </StyleErrorMessage>
          </FeedbackFormGroup>
          <Btnwrapper>
            <BtnLogIn type="submit">Log In Now</BtnLogIn>
          </Btnwrapper>
        </FormLogin>
      </FormikStyle>
    </>
  );
}