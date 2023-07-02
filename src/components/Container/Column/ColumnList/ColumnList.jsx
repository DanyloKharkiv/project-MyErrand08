import { useSelector, useDispatch } from "react-redux";
import { selectColumnsItems } from "../../../../redux/column/columnSlice";
import ColumnItem from "../ColumnItem/ColumnItem";
import {
  ColumnsListli,
  AddBtnBox,
  AddColumnIcon,
  ColumnInfo,
  ColumnWrap,
  ButtonAddCard,
  AddCardIcon,
} from "./ColumnList.styled";
import { useState } from "react";
import Modal from "../../../Modals/Modal";
import AddColumn from "../../../Modals/AddColumn/AddColumn";
import sprite from "../../../../images/sprite.svg";
import AddCard from "../../../Modals/AddCard/AddCard";
import CardTaskList from "../../../CardTaskList/CardTaskList";
import { addCard } from "../../../../redux/cards/operations";
import { changeOwner } from "../../../../redux/cards/cardsSlice";
import { selectOwnerCards } from "../../../../redux/cards/selectors";
import { getUserId } from "../../../../redux/auth/authSelector";

function ColumnList() {
  const ownerUser = useSelector(getUserId);
  const columns = useSelector(selectColumnsItems);
  const dispatch = useDispatch();

  const [modalIsOpenAddColumn, setModalIsOpenAddColumn] = useState(false);
  const [modalIsOpenAddCard, setModalIsOpenAddCard] = useState(false);

  const dispath = useDispatch();
  const ownerColumn = useSelector(selectOwnerCards);

  const openModalAddColumn = () => {
    setModalIsOpenAddColumn(true);
  };
  const closeModalAddColumn = () => {
    setModalIsOpenAddColumn(false);
  };

  const openModalAddCard = (id) => {
    setModalIsOpenAddCard(true);
    dispath(changeOwner(id));
  };

  const closeModalAddCard = () => {
    setModalIsOpenAddCard(false);
  };

  const onSave = (values) => {
    const ownerDesk = "111";

    const card = {
      ownerUser,
      ownerDesk,
      ownerColumn,
      ...values,
    };
    dispatch(addCard(card));
  };

  return (
    <>
      {modalIsOpenAddColumn && (
        <Modal close={closeModalAddColumn}>
          <AddColumn close={closeModalAddColumn} />
        </Modal>
      )}

      {modalIsOpenAddCard && (
        <Modal close={closeModalAddCard}>
          <AddCard onSave={onSave} close={closeModalAddCard} />
        </Modal>
      )}

      {columns.map((item) => (
        <ColumnWrap>
          <ColumnInfo>
            <ColumnItem key={item._id} item={item} />
          </ColumnInfo>
          <CardTaskList />
          <ColumnInfo>
            {/* //КНОПКА ПРИВЯЗАНА ДО КОЛОНКИ item._id */}
            <ButtonAddCard onClick={() => openModalAddCard(item._id)}>
              <AddCardIcon> + </AddCardIcon>Add another card
            </ButtonAddCard>
          </ColumnInfo>
        </ColumnWrap>
      ))}

      <ColumnsListli>
        <AddBtnBox onClick={openModalAddColumn}>
          <AddColumnIcon>
            {/* <svg width="18" height="18">
                    <use href={`${sprite}#icon-plus`}></use>
                  </svg> */}
            +
          </AddColumnIcon>
          Add another column
        </AddBtnBox>
      </ColumnsListli>
    </>
  );
}

export default ColumnList;
