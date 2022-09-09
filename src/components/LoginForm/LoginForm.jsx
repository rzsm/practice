import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/auth-context';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './LoginForm.module.css';

export default function LoginForm(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('') 
	const ctx = useContext(AuthContext) 
	const navigate = useNavigate()  

	const submitHandler = (e) => {
		e.preventDefault();
		if (email.includes('@') && password.length > 5) {
			ctx.onLogin()
			navigate('/')
		} 
	}    

  return (
		<Card className={classes.login}>
			<form onSubmit={submitHandler}>
				<div className={classes.control}>
					<label htmlFor="email">Email: </label>
					<input id="email" onChange={(e) => setEmail(e.target.value)} />
				</div>
				<div className={classes.control}>
					<label htmlFor="password">Password: </label>
					<input id="password" onChange={(e) => setPassword(e.target.value)} />
				</div>
				<div className={classes.actions}>
					<Button className={classes.btn}>
						Login
					</Button>
				</div>
			</form>
		</Card>
	)
}
