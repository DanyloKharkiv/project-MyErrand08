import { CreateBoardBtn } from "../CreateBoard/CreateBoard";
import {
  BoardsElement,
  BoardsTitle,
  BoardsList,
  BoardsItem,
  ProjectsBox,
  ProjectSVG,
  BtnsSVGBox,
  BtnsSVG,
} from "./Boards.Styled";
import sprite from "../../../images/sprite.svg";

export const Boards = () => {
  return (
    <BoardsElement>
      <BoardsTitle>My boards</BoardsTitle>
      <CreateBoardBtn />
      <BoardsList>
        <BoardsItem>
          <ProjectsBox>
            <ProjectSVG
              width="18"
              height="18"
              fill="rgba(31, 31, 31, 0.2)"
              stroke="rgba(255,255,255)"
            >
              <use href={sprite + `#icon-Project`}></use>
            </ProjectSVG>
            <span>Project office</span>
          </ProjectsBox>

          <BtnsSVGBox>
            <BtnsSVG>
              <svg
                width="16"
                height="16"
                fill="rgba(31, 31, 31, 0.2)"
                stroke="rgba(255,255,255,0.5)"
              >
                <use href={sprite + `#icon-Icon-pencil`}></use>
              </svg>
            </BtnsSVG>
            <BtnsSVG>
              <svg
                width="16"
                height="16"
                fill="rgba(31, 31, 31, 0.2)"
                stroke="rgba(255,255,255,0.5)"
              >
                <use href={sprite + `#icon-trash-04`}></use>
              </svg>
            </BtnsSVG>
          </BtnsSVGBox>
        </BoardsItem>
        <BoardsItem>Neon Light Project</BoardsItem>
      </BoardsList>
    </BoardsElement>
  );
};
