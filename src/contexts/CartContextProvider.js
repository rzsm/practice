import { useReducer } from "react"
import CartContext from "./cart-context"

const DEFALUT_STATE = {
	items: [],
	totalAmount: 0,
}

const cartReducer = (state, action) => {
	if (action.type === "ADD") {
		const updatedTotalAmount =
			state.totalAmount + action.item.price * action.item.amount
		// returns -1 if it does not find any
		const existingCartItemIndex = state.items.findIndex(
			(item) => item.id === action.item.id
		)
		// in javascript, there is no -1 index
		const existingCartItem = state.items[existingCartItemIndex]

		let updatedItems
		if (existingCartItem) {
			const updatedItem = {
				...existingCartItem,
				amount: existingCartItem.amount + action.item.amount,
			}
			updatedItems = [...state.items]
			updatedItems[existingCartItemIndex] = updatedItem
		} else {
			updatedItems = [...state.items, action.item]
		}

		return {
			items: updatedItems,
			totalAmount: updatedTotalAmount,
		}
	}

		if (action.type === "REMOVE") {
			const existingItemIndex = state.items.findIndex(
				(item) => item.id === action.id
			)
			const existingItem = state.items[existingItemIndex]
			const existingAmount = state.items[existingItemIndex].amount
			const updatedTotalAmount = state.totalAmount - existingItem.price
			let updatedItems
			if (existingAmount == 1) {
				updatedItems = state.items.filter((item) => item.id !== action.id)
				return {
					items: updatedItems,
					totalAmount: updatedTotalAmount,
				}
			} else {
				updatedItems = [...state.items]
				updatedItems[existingItemIndex] = {
					...existingItem,
					amount: existingAmount - 1,
				}
				return {
					items: updatedItems,
					totalAmount: updatedTotalAmount,
				}
			}
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
