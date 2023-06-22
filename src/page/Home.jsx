import React from 'react';
import {Box, Wrapper, Link, Title, Text} from "./Home.styled";


 const Home = () => {
  return (
    <Box>
    <img src="../images/Image.png" alt="photo" height="162" width ="162" />
    <Wrapper>
    <svg width="48" height="48">
        <use href="../images/sprite.svg#icon-icon-logo"></use>
    </svg>
    <Title>Task Pro</Title>
  </Wrapper>
    <Text>Supercharge your productivity and take control of your tasks with Task Pro - Don't wait, start achieving your goals now!</Text>
    <Link>Registration</Link>
    <Link>Log In</Link>
  </Box>
  )
}

export default Home