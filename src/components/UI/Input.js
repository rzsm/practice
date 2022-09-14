import classes from './Input.module.css'

const Input = props => {
    const classNames = [classes.input, props.className ? props.className : ""]

    return (
			<div className={classNames.join(" ")}>
				<label htmlFor={props.input.id}>{props.label}</label>
				<input {...props.input} />
			</div>
		)
}

export default Input;