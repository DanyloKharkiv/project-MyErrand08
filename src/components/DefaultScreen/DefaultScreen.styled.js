import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  /* height: 100%; */
  display: flex;
  margin-left: auto;
  margin-right: auto;
  margin-top: 200px;
  padding-left: 10px;
  padding-right: 10px;

  @media (min-width: 375px) {
    min-width: 335px;
    max-width: 486px;
  }
`;

export const Text = styled.p`
  font-size: 14px;
  line-height: 1.3;
  letter-spacing: -0.02em;
  text-align: center;
  color: var(--cardTxt);
`;

export const AccentText = styled.span`
  color: var(--accentColor);
`;
