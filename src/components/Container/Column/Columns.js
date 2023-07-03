import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { selectColumnsError, selectColumnsIsLoading } from '../../../redux/column/columnSlice';
import { fetchColumns } from '../../../redux/column/columnOperation';
import ColumnList from './ColumnList/ColumnList';
import { ColumnsUl } from './Columns.Styled';



export const Columns = ({ idDesk }) => {

  const dispatch = useDispatch();
  const isLoading = useSelector(selectColumnsIsLoading);
  const error = useSelector(selectColumnsError);

  useEffect(() => {
    dispatch(fetchColumns(idDesk));
  }, [idDesk]);
  

  return (
    <>
      {isLoading && !error && <b>Loading...</b>}

      <ColumnsUl>
        <ColumnList idDesk={idDesk} />
      </ColumnsUl>
    </>
  );
}

export default Columns;