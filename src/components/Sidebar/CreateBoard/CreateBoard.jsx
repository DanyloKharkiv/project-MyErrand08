import {
  CreateBoardBtnElement,
  CreateBoardBtnText,
  Btn,
} from "./CreateBoard.Styled";
import NewBoardModal from "../../Modals/NewBoard/NewBoardModal";
import sprite from "../../../images/sprite.svg";
import { useRef } from "react";

export const CreateBoardBtn = () => {

  const newBoardModalRef = useRef(null);
  
  const openNewBoardModal = () => {
    if (newBoardModalRef.current) {
      newBoardModalRef.current.openModal()
    }
  }

  return (
    <CreateBoardBtnElement>
      <CreateBoardBtnText>
        Create a <br />
        new board
      </CreateBoardBtnText>
      <Btn onClick={openNewBoardModal}>
        <svg width="20" height="20" stroke="black">
          <use href={sprite + `#icon-plus`}></use>
        </svg>
      </Btn>
      <NewBoardModal ref={newBoardModalRef} />
    </CreateBoardBtnElement>
  );
};
