import { useDispatch } from "react-redux";
import { Item, FrmButton } from "./ColumnItem.styled";
import Notiflix from "notiflix";
import { deleteColumn } from "../../../../redux/column/columnOperation";
import { useEffect } from "react";
import { changeOwner } from "../../../../redux/cards/cardsSlice";

function ColumnItem({ item }) {
  const dispatch = useDispatch();

  const { _id: id } = item;

  useEffect(() => {
    dispatch(changeOwner(id));
  }, [dispatch, id]);

  return (
    <Item key={item._id}>
      {item.title}
      <FrmButton
        onClick={() => {
          dispatch(deleteColumn(item._id));
          Notiflix.Notify.info(
            `Column ${item._id} ${item.title} succesfully deleted`
          );
        }}
        aria-label="Delete"
      >
        -
      </FrmButton>
    </Item>
  );
}

export default ColumnItem;
