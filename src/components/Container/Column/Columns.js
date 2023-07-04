//import { useDispatch, useSelector } from "react-redux";
//import { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  selectColumnsError,
  selectColumnsIsLoading,
} from "../../../redux/column/columnSlice";
//import { fetchColumns } from "../../../redux/column/columnOperation";
import ColumnList from "./ColumnList/ColumnList";
import { ColumnsUl } from "./Columns.Styled";
import { Loader } from "../../Loader/Loader";

export const Columns = ({ idDesk }) => {
  //const dispatch = useDispatch();
  const isLoading = useSelector(selectColumnsIsLoading);
  const error = useSelector(selectColumnsError);

  // useEffect(() => {
  //   dispatch(fetchColumns(idDesk));
  // }, [dispatch, idDesk]);

  return (
    <>
      {isLoading && !error && <Loader />}

      <ColumnsUl>
        <ColumnList idDesk={idDesk} />
      </ColumnsUl>
    </>
  );
};

export default Columns;
