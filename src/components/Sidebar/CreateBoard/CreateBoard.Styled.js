import styled from "styled-components";

export const CreateBoardBtnElement = styled.div`
  margin-left: 24px;
  margin-right: 24px;
  padding-top: 14px;
  padding-bottom: 14px;
  border-top: 1px solid var(--boarder);
  border-bottom: 1px solid var(--boarder);
  display: flex;
  justify-content: space-between;
  align-items: center;
  // height: 70px; 
  font-weight: var(--fontWeight500);
`;

export const CreateBoardBtnText = styled.p`
  /* margin-top: 14px;
  margin-bottom: 14px; */
  font-size: 14px;
`;

export const Btn = styled.button`
  /* margin-top: 19px;
  margin-bottom: 15px; */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 36px;
  background-color: var(--plusBg);
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
