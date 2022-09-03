import { useEffect, useState } from 'react';
import Card from '../UI/Card';
import classes from './LoginForm.module.css';

export default function LoginForm(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isFormValid, setIsFormValid] = useState()

    useEffect(() => {
        if (!(email.includes('@') && password.length > 6)){
            setIsFormValid(false)
        }
        else {
            setIsFormValid(true)
        }
        
    },[email, password])

    

  return (
		<Card className={classes.login}>
			<form>
				<div className={classes.control}>
					<label htmlFor="email">Email: </label>
					<input id="email" onChange={(e) => setEmail(e.target.value)} />
				</div>
				<div className={classes.control}>
					<label htmlFor="password">Password: </label>
					<input id="password" onChange={(e) => setPassword(e.target.value)} />
				</div>
				<div className={classes.actions}>
					<button className={classes.btn} disabled={!isFormValid}>
						Login
					</button>
				</div>
			</form>
		</Card>
	)
}
