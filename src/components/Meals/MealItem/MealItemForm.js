// React
import { useRef, useState } from "react"
// Components
import Input from "../../UI/Input"
// CSS
import classes from "./MealItemForm.module.css"

const MealItemForm = (props) => {
	const [isValidAmount, setIsValidAmount] = useState(true)
	const amountInputRef = useRef()

	const addItemHandler = (event) => {
		event.preventDefault()
		const inputAmount = +amountInputRef.current.value

		if (inputAmount < 1 || inputAmount > 5) {
			setIsValidAmount(false)
			return
		}
		props.onAddItem(inputAmount)
	}

	return (
		<form className={classes.form} onSubmit={addItemHandler}>
			<Input
				ref={amountInputRef}
				label="Amount"
				input={{
					id: "amount",
					type: "number",
					min: "1",
					max: "5",
					defaultValue: "1",
				}}
			/>
			<button>+Add</button>
			{!isValidAmount && <p>Please enter a valid amount (1-5)</p>}
		</form>
	)
}

export default MealItemForm
