import { useSelector } from 'react-redux';
import { selectColumnsItems } from '../../../../redux/column/columnSlice';
import ColumnItem from '../ColumnItem/ColumnItem';
import { ColumnsListli, AddBtnBox, AddColumnIcon, ColumnInfo, ColumnWrap, ButtonAddCard, AddCardIcon, } from './ColumnList.styled';
import { useState } from 'react';
import Modal from '../../../Modals/Modal';
import AddColumn from '../../../Modals/AddColumn/AddColumn';
import sprite from '../../../../images/sprite.svg';
import AddCard from '../../../Modals/AddCard/AddCard';
import CardTaskList from '../../../CardTaskList/CardTaskList';

function ColumnList () {

    const columns = useSelector(selectColumnsItems);

    const [modalIsOpenAddColumn, setModalIsOpenAddColumn] = useState(false);

    const openModalAddColumn = () => { setModalIsOpenAddColumn(true); };
    const closeModalAddColumn = () => { setModalIsOpenAddColumn(false); };
    
    const [modalIsOpenAddCard, setModalIsOpenAddCard] = useState(false);

    const openModalAddCard = () => { setModalIsOpenAddCard(true); };
    const closeModalAddCard = () => { setModalIsOpenAddCard(false); };

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
                        <ColumnInfo>
                            <ColumnItem key={item._id} item={item}/>
                    </ColumnInfo>
                    
                    <CardTaskList />

                    <ColumnInfo>
                        <ButtonAddCard onClick={openModalAddCard}>
                            <AddCardIcon> 
                            <svg width="20" height="20" stroke="var(--plusOnBtn)">
                                <use href={sprite + `#icon-plus`}></use>
                                </svg>
                                 </AddCardIcon>Add another card
                        </ButtonAddCard>
                        </ColumnInfo>
                </ColumnWrap>
            ))}
            
                

        <ColumnsListli>
            <AddBtnBox onClick={openModalAddColumn}>
                <AddColumnIcon>
                  {/* <svg width="18" height="18">
                    <use href={`${sprite}#icon-plus`}></use>
                  </svg> */}
                        +
                </AddColumnIcon>
                    Add another column
                </AddBtnBox>
        </ColumnsListli>

        </>
  );
};


export default ColumnList;