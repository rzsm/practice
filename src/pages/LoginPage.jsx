import { useEffect, useState } from 'react';
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
    // Create Sign-up related states and function using useFetch hook
    const {loading: signUpLoading, error: signUpError, value: SignUpResponse, asyncFn: signUp} 
    = useFetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
    {
        method:"POST",
        body : JSON.stringify({
            email,
            password,
            "returnSecureToken": true
        })
    })
    
    // Loading variaable based on loading states returned by useFetch for UX goal
    let loading = signUpLoading;

    // Feedback user what was wrong
    let errMsg = "";
    useEffect(() => {
        if (signUpError) {
            errMsg = signUpError.error.message ? signUpError.error.message : "Authentication Failed";
            alert(errMsg);
        }
    }, [signUpError])

    // Handle Sign Up and Login
    const submitHandler = (event) => {
        event.preventDefault();
        if (!isLogin) signUp();              
    }
    
    return (
        <Card className={styles.card}>
            <h1 className={styles['card-title']}> 
                {isLogin ? "Login" : "Sign Up"} 
            </h1>
            <form className={styles['login-form']} onSubmit={submitHandler}>
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
                {!loading &&
                    <Button className={styles['login-btn']}> 
                        {isLogin ? "Login" : "Create Account"} 
                    </Button>
                }
                {loading && <p className={styles.loading}>Sending Request ... </p>}              
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