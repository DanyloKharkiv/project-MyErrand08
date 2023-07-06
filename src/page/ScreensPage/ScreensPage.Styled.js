import styled from "styled-components";

export const ScreensPageElement = styled.section`
  padding: 10px 24px 36px 24px;
  background-color: var(--primaryBoardBg);
  height: calc(100vh - 68px);
  //margin-left:  ${(props) => (props.isSidebarOpen ? '260px' : '0')};
  background-repeat: no-repeat;
  background-size: cover;
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
  color: var(--userNameColor);
  margin-bottom: 10px;
`;

export const Filter = styled.div`
  display: flex;
  align-items: center;
`;

export const FilterBtn = styled.button`
  color: var(--filterTxt);
  font-weight: var(--fontWeight500);
  font-size: var(--fontSize14);
  line-height: 21px;
  font-family: Poppins;
  background-color: transparent;
  border: none;
  padding: 0;
  margin-left: 8px;
  cursor: pointer;
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
