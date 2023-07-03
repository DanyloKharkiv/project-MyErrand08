import { useImperativeHandle, useState, forwardRef } from 'react';
import Modal from '../Modal';

import EditBoard from './EditBoard';
const EditBoardModal = (_id, ref) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  useImperativeHandle(ref, () => ({ openModal }));
  return (
    <>
      {showModal && (
        <Modal close={closeModal}>
          <EditBoard close={closeModal} />
        </Modal>
      )}
    </>
  );
};
export default forwardRef(EditBoardModal);
