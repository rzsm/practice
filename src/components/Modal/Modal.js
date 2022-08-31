import React from 'react';
import { Transition } from 'react-transition-group';
import './Modal.css';

const modal = (props) => {    

    return (
		// we can have animation whenever modal is closed and also unmount it from DOM
		// which is something can not be achieved by only CSS animatoin
			<Transition 
				in={props.show}
				timeout={300}
				mountOnEnter
				unmountOnExit
			>
				{state => {					
					const cssClasses = [
						"Modal",
						 state === "entering" 
						 ? "ModalOpen" 
						 : state === "exiting" ? "ModalClosed" : null
					];

					return (
						<div className={cssClasses.join(" ")}>
							<h1>A Modal</h1>
							<button className="Button" onClick={props.close}>
								Dismiss
							</button>
						</div>
					)
				}}

			</Transition>
		)

}

export default modal;