import { CreateBoardBtn } from "../CreateBoard/CreateBoard";
import {
  BoardsElement,
  BoardsTitle,
  BoardsList,
  BoardsItem,
} from "./Boards.Styled";

export const Boards = () => {
  return (
    <BoardsElement>
      <BoardsTitle>My boards</BoardsTitle>
      <CreateBoardBtn />
      <BoardsList>
        <BoardsItem>Project office</BoardsItem>
        <BoardsItem>Neon Light Project</BoardsItem>
      </BoardsList>
    </BoardsElement>
  );
};
