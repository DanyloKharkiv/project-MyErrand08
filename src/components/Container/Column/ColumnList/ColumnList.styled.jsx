import styled from 'styled-components';

export const ColumnsListUl = styled.ul`
  display: flex;
`

export const ColumnsListli = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  height: 30px;
  padding: 5px;
  font-size: 16px;
`;

export const AddBtnBox = styled.div`
  @media screen and (min-width: 320px) {
    background-color: var(--sidebarColor);
    color: var(--contrastColor);
    display: flex;
    justify-content: center;
    align-items: center;

    font-family: var(--poppinsFont);
    font-weight: var(--fontWeight500);
    font-size: var(--fontSize14);
    border-radius: var(--borderRadius8);
    cursor: pointer;
    border: none;

    min-width: 100%;
    height: 56px;
    padding: 14px 70px 14px 75px;

    /* margin-left: 34px; */
  }
  @media screen and (min-width: 375px) {
    min-width: 334px;

    padding: 14px 78px 14px 79px;
  }
`;

export const AddColumnIcon = styled.span`
  margin-right: 8px;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  stroke: var(--contrastColor);
  background-color: var(--contrastColor);
  border-radius: var(--borderRadius8);
`;