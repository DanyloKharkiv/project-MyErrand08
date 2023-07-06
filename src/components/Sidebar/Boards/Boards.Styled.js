import styled from "styled-components";

export const BoardsElement = styled.div`
  /* padding-top: 24px; */
  padding-right: 0px;
  // padding-bottom: 40px;
`;

export const BoardsTitle = styled.h2`
  padding-left: 24px;
  font-size: 12px;
  font-weight: 400;
  opacity: 0.5;
  margin-bottom: 8px;
  color: var(--myBoards);
`;

export const BoardsList = styled.ul`
  height: calc(100vh - 600px);
  margin-top: 4px;
  /* border: 1px solid var(--boarder); */
  padding-top: 40px;
  padding-bottom: 40px;

  /* height: 206px; */
  /* overflow-block: scroll; */
  /* overflow-y: auto; */

  @media screen and (max-width: 1440px) {
    height: calc(100vh - 680px);
    /* height: 138px; */
    padding-top: 12px;
    padding-bottom: 12px;
  }
`;

export const BoardsItem = styled.li`
  display: flex;
  height: 61px;
  align-items: center;
  justify-content: space-between;
  color: var(--contrastColor);

  padding: 20px 24px 20px 24px;

  font-size: 14px;
  font-weight: 500;

  cursor: pointer;

  &:focus {
    background-color: var(--prOfBg);
  }

  &:active {
    background-color: var(--prOfBg);
  }

  background-color: ${({ isSelected }) =>
    isSelected ? "var(--prOfBg)" : "transparent"};

  border-right: ${({ isSelected }) =>
    isSelected ? "4px solid var(--activeBorder)" : "none"};
`;

export const ProjectsBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ProjectSVG = styled.svg`
  margin-right: 8px;
`;

export const BtnsSVGBox = styled.div`
  display: flex;
  display: ${({ isSelected }) => (isSelected ? "block" : "none")};
`;

export const BtnsSVG = styled.button`
  margin-left: 8px;
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
`;
