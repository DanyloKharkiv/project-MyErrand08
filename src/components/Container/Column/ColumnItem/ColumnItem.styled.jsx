import styled from "styled-components";

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 334px;

  padding: 18px 20px 17px 20px;

  border-radius: 8px;
  background-color: var(--addBtnBox);

  height: 56px;
  color: var(--addBtnText);
  font-size: 14px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const FrmButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
`;
