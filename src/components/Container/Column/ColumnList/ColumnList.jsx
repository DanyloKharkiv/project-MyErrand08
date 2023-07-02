import { useDispatch, useSelector } from 'react-redux';
import { selectColumnsItems } from '../../../../redux/column/columnSlice';
import ColumnItem from '../ColumnItem/ColumnItem';
import { ColumnsListli, AddBtnBox, AddColumnIcon, ColumnInfo, ColumnWrap, ButtonAddCard, AddCardIcon, } from './ColumnList.styled';
import { useState } from 'react';
import Modal from '../../../Modals/Modal';
import AddColumn from '../../../Modals/AddColumn/AddColumn';
import sprite from "../../../../images/sprite.svg";
import AddCard from '../../../Modals/AddCard/AddCard';
import CardTaskList from '../../../CardTaskList/CardTaskList';
import { useEffect } from 'react';
import { fetchColumns } from '../../../../redux/column/columnOperation';

function ColumnList({ idDesk }) {

    const dispatch = useDispatch();
    const columns = useSelector(selectColumnsItems);

    const [modalIsOpenAddColumn, setModalIsOpenAddColumn] = useState(false);

    const openModalAddColumn = () => { setModalIsOpenAddColumn(true); };
    const closeModalAddColumn = () => { setModalIsOpenAddColumn(false); };
    
    const [modalIsOpenAddCard, setModalIsOpenAddCard] = useState(false);

    const openModalAddCard = () => { setModalIsOpenAddCard(true); };
    const closeModalAddCard = () => { setModalIsOpenAddCard(false); };

  useEffect(() => {
    dispatch (fetchColumns(idDesk));
  }, [idDesk]);
  
    return (
        <>
            
        {modalIsOpenAddColumn &&
            <Modal close={closeModalAddColumn}>
                <AddColumn close={closeModalAddColumn}/>
            </Modal>
        }
            
        {modalIsOpenAddCard &&
            <Modal close={closeModalAddCard}>
                <AddCard close={closeModalAddCard}/>
            </Modal>
        }

            {columns.map(item => (
                <ColumnWrap>
                    <div>
                        <ColumnInfo>
                            <ColumnItem key={item._id} item={item}/>
                        </ColumnInfo>
                    
                        <CardTaskList />
                    </div>
                    <div>
                        <ColumnInfo>
                            <ButtonAddCard onClick={openModalAddCard}>
                                <AddCardIcon> + </AddCardIcon>Add another card
                            </ButtonAddCard>
                        </ColumnInfo>
                    </div>
                </ColumnWrap>
            ))}
            
                

        <ColumnsListli>
            <AddBtnBox onClick={openModalAddColumn}>
                <AddColumnIcon>
                    <svg width="18" height="18" stroke="var(--sidebarColor)" fill='none'>
                        <use href={sprite + `#icon-plus`}></use>
                    </svg>
                        
                </AddColumnIcon>
                    Add another column
                </AddBtnBox>
        </ColumnsListli>

        </>
  );
};


export default ColumnList;