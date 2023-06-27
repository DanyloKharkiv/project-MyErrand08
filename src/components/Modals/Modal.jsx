import { Overlay } from "./Modal.styled"



const Modal = ({ children, close}) => {
    

    const handleClose = ({ target, currentTarget}) => {
        if (target === currentTarget) {
            close()
        }
    }
    return (
        <>
            <Overlay onClick={handleClose}>
            {children}
            </Overlay>
        </>
        )
}
export default Modal