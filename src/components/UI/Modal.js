import ReactDOM  from "react-dom";

// CSS
import classes from "./Modal.module.css"

const BackDrop = props => {
    return (
        <div className={classes.backdrop}/>
    )
}

const ModalOverlay = props => {
    return (
			<div className={classes.modal}>
				<div className={classes.content}>{props.children}</div>
			</div>
		)
}

const overlayElement = document.getElementById("overlays");

const Modal = props => {
    return <>
        {ReactDOM.createPortal(<BackDrop />, overlayElement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, overlayElement)}
    </>
}

export default Modal;