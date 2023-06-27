import styled from "styled-components";

export const LogoElement = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 24px;
  margin-top: 24px;
  margin-right: 132px;
  margin-bottom: 60px;
  /* border: 1px solid white; */
  width: 104x;
  height: 32px;
`;

export const LogoTitle = styled.h1`
  color: var(--contrastColor);
  font-size: 16px;
  font-weight: 600;
  /* text-align: center; */
`;

export const LogoSVG = styled.svg`
path {
  fill: var(--logo); 
}
`
