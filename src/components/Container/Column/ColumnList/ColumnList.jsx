import { useSelector } from 'react-redux';
import { selectColumnsItems } from '../../../../redux/column/columnSlice';
import ColumnItem from '../ColumnItem/ColumnItem';
import { ColumnsListUl } from './ColumnList.styled';

function ColumnList () {

  const columns = useSelector(selectColumnsItems);

  
    return (
        <>
            <ColumnsListUl>
                {columns.map(item => (
                    <ColumnItem key={item._id} item={item}/>
                ))}
            </ColumnsListUl>
        </>
  );
};


export default ColumnList;