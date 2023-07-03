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
  margin-top: 4px;
  /* border: 1px solid var(--boarder); */
  padding-top:40px;
  padding-bottom:40px;
  height:206px;
  overflow-block: scroll;
`;


export const BoardsItem = styled.li`
  display: flex;
  height:61px;
  align-items: center;
  justify-content: space-between;
  color: var(--contrastColor);
  /* border: 1px solid white; */
  padding: 20px 24px 20px 24px;
  /* opacity: 0.5; */
  font-size: 14px;
  font-weight: 500;
  &:focus{
    background-color: var(--prOfBg)
  };
  // &:first-child {
  //   background-color: var(--prOfBg);
  // }
`;


export const ProjectsBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;


export const ProjectSVG = styled.svg`
  margin-right: 8px;
`;

export const BtnsSVGBox = styled.div`
  display: flex;
`;

export const BtnsSVG = styled.button`
  margin-left: 8px;
  background-color: var(--sidebarColor);
  border: none;
  padding: 0;
  cursor: pointer;
`;

