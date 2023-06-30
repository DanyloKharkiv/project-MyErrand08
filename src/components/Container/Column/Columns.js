import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import AddColumn from '../../Modals/AddColumn/AddColumn';
import { selectColumnsError, selectColumnsIsLoading, selectColumnsItems } from '../../../redux/column/columnSlice';
import { fetchColumns } from '../../../redux/column/columnOperation';
import ColumnList from './ColumnList/ColumnList';
import { AddBtn, AddBtnBox, AddBtnText, ColumnsUl, ColumnsLi } from './Columns.Styled';
import Modal from '../../Modals/Modal';
// import { Layout } from 'components/Layout';



export const Columns = () => {

  const dispatch = useDispatch();
  const isLoading = useSelector(selectColumnsIsLoading);
  const error = useSelector(selectColumnsError);
  const columns = useSelector(selectColumnsItems);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };


  const idDesk = "6499131312314f7fc9af9c64";

  useEffect(() => {
    dispatch(fetchColumns(idDesk));
  }, [dispatch]);

  return (
    // <Layout>
    <>
      {isLoading && !error && <b>Loading...</b>}

      {modalIsOpen &&
        <Modal close={closeModal}>
          <AddColumn close={closeModal}/>
        </Modal>
      }

      <ColumnsUl>
        {columns.length !== 0 &&
          <ColumnsLi>
            <ColumnList />
          </ColumnsLi>            
        }
      

        <ColumnsLi>
          <AddBtnBox>
            <AddBtn onClick={openModal}>+</AddBtn>
            <AddBtnText>Add another column</AddBtnText>
          </AddBtnBox>
        </ColumnsLi>
      </ColumnsUl>
    </>
    // </Layout>
  );
}

export default Columns;