import styled from "styled-components";

export const AddBtnBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  color: var(--addBtnText);
  display: flex;
  justify-content: center;
  width: 334px;
  text-align: center;
  background-color: var(--addBtnBox);
  padding-top: 14px;
  padding-bottom: 14px;
  border-radius: 8px;
`;

export const AddBtnText = styled.p`
  font-size: 14px;
`;

export const AddBtn = styled.button`
  font-family: Poppins;
  padding: 0;
  border-radius: 4px;
  border: none;
  height: 28px;
  width: 28px;
  margin-right: 8px;
  cursor: pointer;
`;

export const ColumnsUl = styled.ul`
  display: flex;
`

export const ColumnsLi = styled.li`
  width: 350px;
  display: block;
`
