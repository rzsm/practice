import React from "react"
import { CSSTransition } from "react-transition-group"
import "./Modal.css"

const modal = (props) => {
	return (
		<CSSTransition 
			in={props.show} 
			timeout={300} 
			mountOnEnter 
			unmountOnExit
			// Following classNames will be added to "Modal" className conditionally
			classNames={{
				enterActive: 'ModalOpen',
				exitActive: 'ModalClosed'
			}}
		>
			<div className={"Modal"}>
				<h1>A Modal</h1>
				<button className="Button" onClick={props.close}>
					Dismiss
				</button>
			</div>
		</CSSTransition>
	)
}

export default modal
