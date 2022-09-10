import { useEffect, useState, useContext, useReducer } from "react"
import { useNavigate } from "react-router-dom"
import AuthContext from "../context/auth-context"
import Card from "../UI/Card"
import Button from "../UI/Button"
import classes from "./LoginForm.module.css"

const formDataReducer = (state, action) => {
	if (action.type === "updateValue") {
		if (action.inputField === "email") {
			return {
				...state,
				email: action.value,
			}
		} else {
			return {
				...state,
				password: action.value,
			}
		}
	}
	if (action.type === "onBlur") {
		if (action.inputField === "email") {
			if (state.email.includes("@")) {
				return {
					...state,
					emailIsValid: true,
				}
			} else {
				return {
					...state,
					emailIsValid: false,
				}
			}
		} else {
			if (state.password.length > 5) {
				return {
					...state,
					passwordIsValid: true,
				}
			} else {
				return {
					...state,
					passwordIsValid: false,
				}
			}
		}
	}
	if (action.type === "onFocus") {
		if (action.inputField === "email") {				
			return {
				...state,
				emailIsValid: true,
			}
		} else {
			return {
				...state,
				passwordIsValid: true,
			}			
		}
	}
}


export default function LoginForm(props) {
	const [formData, dispatchFormData] = useReducer(formDataReducer, {
		email: "",
		password: "",
		emailIsValid: true,
		passwordIsValid: true,
	})
	const ctx = useContext(AuthContext)
	const navigate = useNavigate()

	const submitHandler = (e) => {
		e.preventDefault()
		if (formData.email.includes("@") && formData.password.length > 5) {
			ctx.onLogin()
			navigate("/")
		}
	}

	return (
		<Card className={classes.login}>
			<form onSubmit={submitHandler}>
				<div className={classes.control}>
					<label htmlFor="email">Email: </label>
					<input
						id="email"
						onChange={(e) =>
							dispatchFormData({
								type: "updateValue",
								inputField: "email",
								value: e.target.value,
							})
						}
						onBlur={() =>
							dispatchFormData({
								type: "onBlur",
								inputField: "email",
							})
						}
						onFocus={() =>
							dispatchFormData({
								type: "onFocus",
								inputField: "email",
							})
						}
						className={formData.emailIsValid ? "" : classes.invalid}
					/>
				</div>
				{!formData.emailIsValid && (
					<p className={classes.warning}>*please enter a valid email</p>
				)}
				<div className={classes.control}>
					<label htmlFor="password">Password: </label>
					<input
						id="password"
						type="password"
						onChange={(e) =>
							dispatchFormData({
								type: "updateValue",
								inputField: "password",
								value: e.target.value,
							})
						}
						onBlur={() =>
							dispatchFormData({
								type: "onBlur",
								inputField: "password",
							})
						}
						onFocus={() =>
							dispatchFormData({
								type: "onFocus",
								inputField: "password",
							})
						}
						className={formData.passwordIsValid ? "" : classes.invalid}
					/>
				</div>
				{!formData.passwordIsValid && (
					<p className={classes.warning}>
						*password at least should be 6 characters long
					</p>
				)}

				<div className={classes.actions}>
					<Button className={classes.btn}>Login</Button>
				</div>
			</form>
		</Card>
	)
}
