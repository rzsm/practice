import { useState } from 'react';
import useToggle from "../hooks/useToggle";
import useFetch from "../hooks/useFetch";
import Card from "../components/UI/Card";
import Input from "../components/UI/Input";
import Button from "../components/UI/Button";
import styles from './LoginPage.module.css'

const LoginPage = () => {
    const [isLogin, toggleLogin] = useToggle(true); 
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();     
    const API_KEY = 'AIzaSyDkgsq8Ui7-n5sOgpLFcdxNoVEhAKmtEtE';
    const {loading, error, value, asyncFn: signUp} = useFetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
    {
        method:"POST",
        body : JSON.stringify({
            email,
            password,
            "returnSecureToken": true
        })
    })
    
    const submitHandler = (event) => {
        event.preventDefault();
        if (!isLogin) signUp();                
    }
    
    return (
        <Card className={styles.card}>
            <h1 className={styles['card-title']}> 
                {isLogin ? "Login" : "Sign Up"} 
            </h1>
            <form className={styles['login-form']}>
                <Input 
                    label="Your Email"
                    id="email" 
                    required 
                    inputClass={styles.input}
                    onChange={(e) => setEmail(e.target.value)}                   
                />
                <Input 
                    label="Your Password" 
                    id="password" 
                    type="password"
                    required 
                    inputClass={styles.input + ' ' + styles['last-input']}
                    onChange={e => setPassword(e.target.value)}                    
                />
                <Button className={styles['login-btn']} onClick={submitHandler}> 
                    {isLogin ? "Login" : "Create Account"} 
                </Button>
                <button 
                    className={styles['new-account']} 
                    type="button" 
                    onClick={toggleLogin}
                >
                    {isLogin ? "Create new account" : "Login with existing account"}
                </button>
            </form>
        </Card>
    )
}

export default LoginPage;