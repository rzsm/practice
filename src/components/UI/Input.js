import React from 'react'
import classes from './Input.module.css'

const Input = React.forwardRef((props, ref) => {
    const classNames = [classes.input, props.className ? props.className : ""]

    return (
			<div className={classNames.join(" ")}>
				<label htmlFor={props.input.id}>{props.label}</label>
				<input {...props.input} ref={ref} />
			</div>
		)
})

export default Input;