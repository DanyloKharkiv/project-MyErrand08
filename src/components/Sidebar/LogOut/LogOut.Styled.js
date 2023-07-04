import styled from "styled-components";

export const LogoutElement = styled.div`
  display: flex;
  align-items: center;
  /* font-family: Poppins; */
  padding-left: 24px;
  padding-top: 24px;
  padding-bottom: 24px;
  cursor: pointer;
`;

export const LogoutBtn = styled.button`
  padding: 0;
  font-family: Poppins;
  background-color: var(--sidebarColor);
  color: var(--logOut);
  border: none;
  font-size: 16px;
  margin-left: 14px;
  font-weight: 500;
  cursor: pointer;
`;
