import React from "react";
import { Box, Wrapper, Link, Title, Text, IMG } from "./WelcomePage.Styled";
import img from "../../images/Image.png";
import sprite from "../../images/sprite.svg";

import ContainerCards from "../../components/ContainerCards/ContainerCards";
const WelcomePage = () => {
  return (
    <Box>
      <ContainerCards />
      <IMG src={img} alt="photo" height="162" width="162" />
      <Wrapper>
        <svg width="48" height="48">
          <use href={sprite + `#icon-icon-logo`}></use>
        </svg>
        <Title>Task Pro</Title>
      </Wrapper>
      <Text>
        Supercharge your productivity and take control of your tasks with Task
        Pro - Don't wait, start achieving your goals now!
      </Text>
      <Link to="/auth/register">Registration</Link>
      <Link to="/auth/login">Log In</Link>
    </Box>
  );
};

export default WelcomePage;
