import { useSelector } from 'react-redux';
import { selectColumnsItems } from '../../../../redux/column/columnSlice';
import ColumnItem from '../ColumnItem/ColumnItem';
import { ColumnsListli, AddBtn, AddBtnBox, AddBtnText, AddColumnIcon, } from './ColumnList.styled';
import { useState } from 'react';
import Modal from '../../../Modals/Modal';
import AddColumn from '../../../Modals/AddColumn/AddColumn';
import sprite from '../../../../images/sprite.svg';

function ColumnList () {

  const columns = useSelector(selectColumnsItems);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  
    return (
        <>
            
        {modalIsOpen &&
            <Modal close={closeModal}>
                <AddColumn close={closeModal}/>
            </Modal>
            }
            
        {columns.map(item => (
            <ColumnItem key={item._id} item={item}/>
        ))}
            
        <ColumnsListli>
            <AddBtnBox onClick={openModal}>
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