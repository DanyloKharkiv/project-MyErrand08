import styled from "styled-components";

export const ColumnsListUl = styled.ul`
  display: flex;
`;

export const ColumnsListli = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  height: 30px;
  padding: 5px;
  font-size: 16px;
  margin-top: 13px;
`;

export const AddBtnBox = styled.div`
  @media screen and (min-width: 320px) {
    background-color: var(--addBtnBox);
    color: var(--addBtnText);
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
    padding: 14px 0px 14px 0px;

    /* margin-left: 34px; */
  }
  @media screen and (min-width: 375px) {
    min-width: 334px;

    padding: 14px 0px 14px 0px;
  }
`;

export const AddColumnIcon = styled.span`
  margin-right: 8px;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--addBtnBox);

  background-color: var(--addBtnIcon);
  border-radius: var(--borderRadius8);
`;

export const AddCardIcon = styled.span`
  margin-right: 8px;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--addBtnText);
  background-color: var(--addCardBtnTxt);
  border-radius: var(--borderRadius8);
`;

export const ColumnWrap = styled.li`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
`;

export const ButtonAddCard = styled.button`
  display: flex;
  min-width: 100%;
  /* margin: 6px 0; */
  padding: 10px 0px 11px 0px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: var(--accentColor);
  border: none;
  cursor: pointer;
  color: var(--addCardBtnTxt);
  font-size: 14px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  /* :hover {
    color: var(--accentColor);
  } */
`;

export const ColumnInfo = styled.div`
  color: #fff;
`;
