import { useReducer } from "react"
import CartContext from "./cart-context"

const DEFALUT_STATE = {
	items: [],
	totalAmount: 0,
}

const cartReducer = (state, action) => {
	if (action.type === "ADD") {
		return {
			items: state.items.concat(action.item),
            totalAmount: state.totalAmount + action.item.amount * action.item.price
		}
	}

	if (action.type === "REMOVE") {
	}

	return DEFALUT_STATE
}

const CartContextProvider = (props) => {
	const [cartState, dispatchCartActions] = useReducer(
		cartReducer,
		DEFALUT_STATE
	)

	const addItemHandler = (item) => {
		dispatchCartActions({
			type: "ADD",
			item: item,
		})
	}

	const removeItemHandler = (id) => {
		dispatchCartActions({
			type: "REMOVE",
			id: id,
		})
	}

	const cartContextValue = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: addItemHandler,
		removeItem: removeItemHandler,
	}

	return (
		<CartContext.Provider value={cartContextValue}>
			{props.children}
		</CartContext.Provider>
	)
}

export default CartContextProvider
