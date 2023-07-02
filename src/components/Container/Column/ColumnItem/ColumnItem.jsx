import { useDispatch } from "react-redux";
import { Item, FrmButton } from "./ColumnItem.styled";
import Notiflix from "notiflix";
import { deleteColumn } from "../../../../redux/column/columnOperation";
import { useEffect } from "react";
import { changeOwner } from "../../../../redux/cards/cardsSlice";
import { useDispatch } from "react-redux";
import { Item, FrmButton } from "./ColumnItem.styled";
import Notiflix from "notiflix";
import { deleteColumn } from "../../../../redux/column/columnOperation";
import sprite from "../../../../images/sprite.svg";
import { useState } from "react";
import Modal from "../../../Modals/Modal";
import EditColumn from "../../../Modals/EditColumn/EditColumn";

function ColumnItem({ item }) {
  const dispatch = useDispatch();

  const { _id: id } = item;

  useEffect(() => {
    dispatch(changeOwner(id));
  }, [dispatch, id]);

  const [modalIsOpenEditColumn, setModalIsOpenEditColumn] = useState(false);

  const openModalEditColumn = () => {
    setModalIsOpenEditColumn(true);
  };
  const closeModalEditColumn = () => {
    setModalIsOpenEditColumn(false);
  };

  return (
    <Item key={item._id}>
      <div>{item.title}</div>

      {modalIsOpenEditColumn && (
        <Modal close={closeModalEditColumn}>
          <EditColumn
            ColumnTitle={item.title}
            ColumnId={item._id}
            close={closeModalEditColumn}
          />
        </Modal>
      )}
      <div>
        <FrmButton
          onClick={() => {
            openModalEditColumn();
          }}
          aria-label="Edit"
        >
          <svg width="16" height="16" stroke="var(--opacityWhite2)" fill="none">
            <use href={sprite + `#icon-Icon-pencil`}></use>
          </svg>
        </FrmButton>

        <FrmButton
          onClick={() => {
            dispatch(deleteColumn(item._id));
            Notiflix.Notify.info(
              `Column ${item._id} ${item.title} succesfully deleted`
            );
          }}
          aria-label="Delete"
        >
          <svg width="16" height="16" stroke="var(--opacityWhite2)" fill="none">
            <use href={sprite + `#icon-trash-04`}></use>
          </svg>
        </FrmButton>
      </div>
    </Item>
  );
}

export default ColumnItem;
