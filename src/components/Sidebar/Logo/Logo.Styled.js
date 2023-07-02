import styled from "styled-components";

export const LogoElement = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 24px;
  margin-left: 24px;
  margin-bottom: 60px;
  /* border: 1px solid white; */
  width: 109px;
  height: 32px;
`;

export const LogoTitle = styled.h1`
  color: var(--contrastColor);
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -4%;
  /* text-align: center; */
`;

export const LogoSVG = styled.svg`
path {
  fill: var(--logo); 
}
`
