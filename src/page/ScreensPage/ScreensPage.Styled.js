import styled from "styled-components";

export const ScreensPageElement = styled.section`
  padding: 10px 24px 36px 24px;
  background-color: var(--primaryBoardBg);
  height: 709px;
`;
export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--contrastColor);
`;

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

export const Title = styled.h1`
  font-family: Poppins;
  font-size: 18px;
  font-weight: 400;
`;

export const Filter = styled.div`
  display: flex;
  align-items: center;
`;

export const FilterBtn = styled.button`
  color: var(--filterTxt);
  opacity: 0.8;
  font-family: Poppins;
  background-color: var(--primaryBoardBg);
  border: none;
  padding: 0;
  margin-left: 8px;
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
`;
