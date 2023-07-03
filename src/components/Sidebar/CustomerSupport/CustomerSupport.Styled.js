import styled from "styled-components";

export const HelpElement = styled.div`
  /* border: 1px solid white; */
  margin-left: 24px;
  margin-right: 24px;
  padding: 20px;
  background-color: var(--needHelpBg);
  border-radius: 8px;
`;
export const IMG = styled.img`
  margin-bottom: 14px;
`;

export const Text = styled.p`
  font-size: 14px;
  line-height: 20px;
`;

export const TextSpan = styled.span`
  color: var(--accentColor);
`;

export const HelpBtn = styled.button`
  display: flex;
  align-items: center;
  padding: 0;
  margin-top: 18px;
  font-size: 12px;
  background-color: transparent;
  border: none;
  cursor:pointer;
`;

export const HelpText = styled.p`
  font-family: Poppins;
  margin-left: 8px;
  font-size: 12px;
  color: var(--contrastColor);
  font-weight: var(--fontWeight500);
`;
