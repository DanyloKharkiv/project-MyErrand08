import {
  CreateBoardBtnElement,
  CreateBoardBtnText,
  Btn,
} from "./CreateBoard.Styled";
export const CreateBoardBtn = () => {
  return (
    <CreateBoardBtnElement>
      <CreateBoardBtnText>
        Create a <br />
        new board
      </CreateBoardBtnText>
      <Btn>+</Btn>
    </CreateBoardBtnElement>
  );
};
