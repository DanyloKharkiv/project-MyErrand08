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

function ColumnList() {
  const columns = useSelector(selectColumnsItems);
  const dispatch = useDispatch();

  const [modalIsOpenAddColumn, setModalIsOpenAddColumn] = useState(false);

  const openModalAddColumn = () => {
    setModalIsOpenAddColumn(true);
  };
  const closeModalAddColumn = () => {
    setModalIsOpenAddColumn(false);
  };

  const [modalIsOpenAddCard, setModalIsOpenAddCard] = useState(false);

  const openModalAddCard = () => {
    setModalIsOpenAddCard(true);
  };
  const closeModalAddCard = () => {
    setModalIsOpenAddCard(false);
  };

  const onSave = (values) => {
    const ownerUser = "12";
    const ownerDesk = "111";
    const ownerColumn = "1111";
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

      {/* ========ПРИБРАТИ після відпрацювання!!!=========== */}
      <ColumnWrap>
        <ColumnInfo>
          <ColumnItem key={11} item={"new card"} />
        </ColumnInfo>
        <CardTaskList ownerColumn={11} />
        {/* <CardTaskList /> */}
        <ColumnInfo>
          <ButtonAddCard onClick={openModalAddCard}>
            <AddCardIcon> + </AddCardIcon>Add another card
          </ButtonAddCard>
        </ColumnInfo>
      </ColumnWrap>
      {/* ===================================================== */}

      {columns.map((item) => (
        <ColumnWrap>
          <ColumnInfo>
            <ColumnItem key={item._id} item={item} />
          </ColumnInfo>
          <CardTaskList />
          <ColumnInfo>
            <ButtonAddCard onClick={openModalAddCard}>
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
