import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  height: 49px;
  background-color: #bedbb0;
  border-radius: 8px;
  cursor: pointer;
  color: var(--blackColor);
  font-family: var(--poppinsFont);
  font-weight: var(--fontWeight500);
  border: none;
  transition: var(--transition);

  @media screen and (min-width: 375px) {
    width: 285px;
  }

  @media screen and (min-width: 768px) {
    width: 302px;
  }
  &:focus {
    outline: none;
  }

  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
`;
