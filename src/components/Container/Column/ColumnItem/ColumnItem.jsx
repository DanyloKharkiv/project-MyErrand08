import { useDispatch } from 'react-redux';
import { Item, FrmButton } from './ColumnItem.styled';
import Notiflix from 'notiflix';
import { deleteColumn } from '../../../../redux/column/columnOperation';

function ColumnItem({ item }) {

    const dispatch = useDispatch();

    return (
        <Item key={item.id}>
            {item.name}
            <FrmButton onClick={() => {
                    dispatch(deleteColumn(item.id));
                    Notiflix.Notify.info(`Column ${item.name} succesfully deleted`);
                }
            }
                aria-label="Delete">
                Delete
            </FrmButton>
        </Item>
    );
};

export default ColumnItem;