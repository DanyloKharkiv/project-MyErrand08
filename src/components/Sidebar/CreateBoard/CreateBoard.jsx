import {
  CreateBoardBtnElement,
  CreateBoardBtnText,
  Btn,
} from "./CreateBoard.Styled";
import sprite from "../../../images/sprite.svg";

export const CreateBoardBtn = () => {
  return (
    <CreateBoardBtnElement>
      <CreateBoardBtnText>
        Create a <br />
        new board
      </CreateBoardBtnText>
      <Btn>
        <svg width="20" height="20" stroke="black">
          <use href={sprite + `#icon-plus`}></use>
        </svg>
      </Btn>
    </CreateBoardBtnElement>
  );
};
