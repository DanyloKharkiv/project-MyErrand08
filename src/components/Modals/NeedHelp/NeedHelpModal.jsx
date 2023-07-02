import { useImperativeHandle, useState, forwardRef } from "react";
import Modal from "../Modal"
import NeedHelp from "./NeedHelp";


const HelpModal = (_,ref) => {
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
            <NeedHelp close={closeModal}/>
                </Modal>}
        </>
    )
}
export default forwardRef(HelpModal);

