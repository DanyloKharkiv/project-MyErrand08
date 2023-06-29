import { useSelector } from 'react-redux';
import { selectColumnsItems } from '../../../../redux/column/columnSlice';
import ColumnItem from '../ColumnItem/ColumnItem';

function ColumnList () {

  const columns = useSelector(selectColumnsItems);

  
    return (
        <>
            <ul>
                {columns.map(item => (
                    <ColumnItem key={item.id} item={item}/>
                ))}
            </ul>
        </>
  );
};


export default ColumnList;