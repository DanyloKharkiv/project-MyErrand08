import { Overlay } from "./Modal.styled"

const Modal = ({ children, onModalClick }) => {
    
    const handleClose = ({ target, currentTarget}) => {
        if (target === currentTarget) {
            onModalClick()
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