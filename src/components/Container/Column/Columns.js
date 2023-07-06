import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  selectColumnsError,
  selectColumnsIsLoading,
} from "../../../redux/column/columnSlice";
import ColumnList from "./ColumnList/ColumnList";
import { ColumnsUl } from "./Columns.Styled";
import { Loader } from "../../Loader/Loader";
import { initialListCards } from "../../../redux/cards/cardsSlice";

export const Columns = ({ idDesk }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectColumnsIsLoading);
  const error = useSelector(selectColumnsError);

  useEffect(() => {
    dispatch(initialListCards());
  }, [dispatch, idDesk]);

  return (
    <>
      {isLoading && !error && <Loader />}
      <div>
        <ColumnsUl>
          <ColumnList idDesk={idDesk} />
        </ColumnsUl>
      </div>
    </>
  );
};

export default Columns;
