import { useImperativeHandle, useState, forwardRef } from "react";
import Modal from "../Modal"
import NewBoard from "./NewBoard";
const NewBoardModal = (_,ref) => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    }

    const closeModal = () => {
    setShowModal(false);
    }
    useImperativeHandle(ref, () => ({ openModal }));
    return (
        <>
            {showModal&&<Modal close={closeModal}>
                <NewBoard close={closeModal} />

                </Modal>}
        </>
    )
}
export default forwardRef(NewBoardModal);