//------------------------------------------------------------
import { useDispatch, useSelector } from "react-redux";
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

import { useEffect } from "react";
import { fetchColumns } from "../../../../redux/column/columnOperation";

function ColumnList({ idDesk }) {
  const dispatch = useDispatch();
  const columns = useSelector(selectColumnsItems);

  const [modalIsOpenAddColumn, setModalIsOpenAddColumn] = useState(false);
  const openModalAddColumn = () => {
    setModalIsOpenAddColumn(true);
  };

  const closeModalAddColumn = () => {
    setModalIsOpenAddColumn(false);
  };

  const [modalIsOpenAddCard, setModalIsOpenAddCard] = useState(false);

  const openModalAddCard = (id) => {
    setModalIsOpenAddCard(true);
    dispatch(changeOwner(id));
  };

  const closeModalAddCard = () => {
    setModalIsOpenAddCard(false);
  };

  useEffect(() => {
    dispatch(fetchColumns(idDesk));
  }, [dispatch]);

  const ownerColumn = useSelector(selectOwnerCards); //sveta code
  const ownerUser = useSelector(getUserId); //sveta code

  const onSave = (values) => {
    //sveta code
    const ownerDesk = "111";

    const card = {
      ownerUser,
      ownerDesk,
      ownerColumn,
      ...values,
    };
    console.log("card", card);
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
          <AddCard onSave={onSave} close={closeModalAddCard} /> //тут зміни
        </Modal>
      )}

      {columns.map((item) => (
        <ColumnWrap>
          <div>
            <ColumnInfo>
              <ColumnItem key={item._id} item={item} />
            </ColumnInfo>

            <CardTaskList />
          </div>
          <div>
            <ColumnInfo>
              {/* //КНОПКА ПРИВЯЗАНА ДО КОЛОНКИ item._id */}
              <ButtonAddCard onClick={() => openModalAddCard(item._id)}>
                <AddCardIcon> + </AddCardIcon>Add another card
              </ButtonAddCard>
            </ColumnInfo>
          </div>
        </ColumnWrap>
      ))}

      <ColumnsListli>
        <AddBtnBox onClick={openModalAddColumn}>
          <AddColumnIcon>
            <svg
              width="18"
              height="18"
              stroke="var(--sidebarColor)"
              fill="none"
            >
              <use href={sprite + `#icon-plus`}></use>
            </svg>
          </AddColumnIcon>
          Add another column
        </AddBtnBox>
      </ColumnsListli>
    </>
  );
}

export default ColumnList;
