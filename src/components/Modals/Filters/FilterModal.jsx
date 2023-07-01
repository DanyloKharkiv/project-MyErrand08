import { useImperativeHandle, useState, forwardRef } from "react";
import Modal from "../Modal";
import Filter from "./Filters";

const FilterModal = (_, ref) => {

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    }

    const closeModal = () => {
    setShowModal(false);
    }
    useImperativeHandle(ref, () => ({ openModal }));

    
    return <>
        {showModal&&<Modal close={closeModal}>
            <Filter close={closeModal} />
                </Modal>}
            </>
    

}
export default forwardRef(FilterModal);


