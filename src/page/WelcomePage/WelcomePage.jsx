import React from 'react';
import {Box, Wrapper, Link, Title, Text, IMG} from "./WelcomePage.Styled";
import Columns from '../../components/Container/Column/Columns';

const WelcomePage = () => {
  return (
    <Box>
    <IMG src="../images/Image.png" alt="photo" height="162" width ="162" />
    <Wrapper>
    <svg width="48" height="48">
        <use href="../images/sprite.svg#icon-icon-logo"></use>
    </svg>
    <Title>Task Pro</Title>
  </Wrapper>
    <Text>Supercharge your productivity and take control of your tasks with Task Pro - Don't wait, start achieving your goals now!</Text>
    <Link>Registration</Link>
      <Link>Log In</Link>
      
      <Columns />
  </Box>
  )
}

export default WelcomePage