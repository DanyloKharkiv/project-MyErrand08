import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import AddColumn from '../../Modals/AddColumn/AddColumn';
import { selectColumnsError, selectColumnsIsLoading, selectColumnsItems } from '../../../redux/column/columnSlice';
import { fetchColumns } from '../../../redux/column/columnOperation';
import ColumnList from './ColumnList/ColumnList';
// import { Layout } from 'components/Layout';



export const Columns = () => {

  const dispatch = useDispatch();
  const isLoading = useSelector(selectColumnsIsLoading);
  const error = useSelector(selectColumnsError);
  const columns = useSelector(selectColumnsItems);

  useEffect(() => {
    dispatch(fetchColumns());
  }, [dispatch]);

  return (
    // <Layout>
    <>
      {isLoading && !error && <b>Loading...</b>}

      <AddColumn />
      
      <h2>Columns</h2>
      {columns.length !== 0 ? (
        <>
          <ColumnList />
        </>
        ) : ( <h3>There are no Columns!</h3> )
      }
    </>
    // </Layout>
  );
}

export default Columns;