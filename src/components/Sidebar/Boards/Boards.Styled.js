import styled from "styled-components";

export const BoardsElement = styled.div`
  /* padding-top: 24px; */
  padding-right: 0px;
  padding-bottom: 40px;
`;

export const BoardsTitle = styled.h2`
  padding-left: 24px;
  font-size: 12px;
  font-weight: 400;
  opacity: 0.5;
  margin-bottom: 8px;
`;

export const BoardsList = styled.ul`
  margin-top: 4px;
  /* border: 1px solid white; */
`;

export const BoardsItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 4px;
  color: white;
  /* border: 1px solid white; */
  padding: 20px 24px 20px 24px;
  background-color: rgba(31, 31, 31, 0.2);
  /* opacity: 0.5; */
  font-size: 14px;
  font-weight: 500;
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
`;

export const BtnsSVG = styled.button`
  margin-left: 8px;
  background-color: rgba(31, 31, 31, 0.1);
  border: none;
  padding: 0;
`;
