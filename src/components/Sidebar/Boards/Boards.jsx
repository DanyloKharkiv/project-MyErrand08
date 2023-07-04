import { CreateBoardBtn } from "../CreateBoard/CreateBoard";
import {
  BoardsElement,
  BoardsTitle,
  // BoardsList,
  // BoardsItem,
  // ProjectsBox,
  // ProjectSVG,
  // BtnsSVGBox,
  // BtnsSVG,
} from "./Boards.Styled";
// import sprite from "../../../images/sprite.svg";
import BoardsList from "./BoardList";

export const Boards = () => {
  return (
    <BoardsElement>
      <BoardsTitle>My boards</BoardsTitle>
      <CreateBoardBtn />
      <BoardsList/>
      {/* <BoardsList>
        <BoardsItem>
          <ProjectsBox>
            <ProjectSVG
              width="18"
              height="18"
              fill="var(--prOfBg)"
              stroke="var(--contrastColor)"
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
                fill="var(--prOfBg)"
                stroke="var(--myBoards)"
              >
                <use href={sprite + `#icon-Icon-pencil`}></use>
              </svg>
            </BtnsSVG>
            <BtnsSVG>
              <svg
                width="16"
                height="16"
                fill="var(--prOfBg)"
                stroke="var(--myBoards)"
              >
                <use href={sprite + `#icon-trash-04`}></use>
              </svg>
            </BtnsSVG>
          </BtnsSVGBox>
        </BoardsItem>
        <BoardsItem>Neon Light Project</BoardsItem>
      </BoardsList> */}
    </BoardsElement>
  );
};
