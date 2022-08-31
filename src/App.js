import React from "react";
import { useState } from "react"
import "./App.css"
import Modal from "./components/Modal/Modal"
import Backdrop from "./components/Backdrop/Backdrop"
import List from "./components/List/List"

const App = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)

	const showModal = () => {
		setIsModalOpen(true)
	}

	const closeModal = () => {
		setIsModalOpen(false)
	}

	return (
		<div className="App">
			<h1>React Animations</h1>
			<Modal show={isModalOpen} close={closeModal} />
			{isModalOpen ? <Backdrop show={isModalOpen} /> : null}
			<button className="Button" onClick={showModal}>
				Open Modal
			</button>
			<h3>Animating Lists</h3>
			<List />
		</div>
	)
}

export default App
