import { useEffect, useState } from 'react';
import { useLoginHandler, useToken } from '../context/auth-context';
import { useNavigate } from 'react-router-dom';
import useToggle from "../hooks/useToggle";
import useFetch from "../hooks/useFetch";
import Card from "../components/UI/Card";
import Input from "../components/UI/Input";
import Button from "../components/UI/Button";
import styles from './LoginPage.module.css';

const API_KEY = 'AIzaSyDkgsq8Ui7-n5sOgpLFcdxNoVEhAKmtEtE';

let url ='';
const LoginPage = () => {
    const [isLoginForm, toggleLogin] = useToggle(true); 
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();  
    const loginHandler = useLoginHandler();
    const token = useToken();  
    const navigate = useNavigate();


    // Create Sign-up related states and function using useFetch hook
    const {loading: signUpLoading, error: signUpError, value: SignUpValue, asyncFn: signUp} 
    = useFetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
    {
        method:"POST",
        body : JSON.stringify({
            email,
            password,
            "returnSecureToken": true
        })
    })

    // Create Sign-In related states and function using useFetch hook
    const {loading: signInLoading, error: signInError, value: SignInValue, asyncFn: signIn} 
    = useFetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
    {
        method:"POST",
        body : JSON.stringify({
            email,
            password,
            "returnSecureToken": true
        })
    })
  
    
    // Loading variable based on loading states returned by useFetch for UX goal
    let loading = signUpLoading || signInLoading;

    // Feedback user what was wrong
    let errMsg = "";
    useEffect(() => {
        if (signInError) {
            errMsg = (signInError && signInError.error && signInError.error.message) 
            ? signInError.error.message : "Authentication Failed";
            alert(errMsg);
        }
        else if (signUpError) {
            errMsg = (signUpError && signUpError.error && signUpError.error.message)
            ? signUpError.error.message : "Authentication Failed";
            alert(errMsg);
        }

    }, [signUpError, signInError])

    // Set Token Context :
    useEffect(() => {
        if (SignInValue) {
            if(SignInValue.idToken){
                loginHandler(SignInValue.idToken); 
                navigate('/', {
                    replace: true
                })  
            }          
        }  
    },[SignInValue])

    
    // Handle Sign Up and Login    
    const submitHandler = (event) => {
        event.preventDefault();
        if (!isLoginForm) signUp();
        if (isLoginForm) signIn();           
    }
    
    return (
        <Card className={styles.card}>
            <h1 className={styles['card-title']}> 
                {isLoginForm ? "Login" : "Sign Up"} 
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
                        {isLoginForm ? "Login" : "Create Account"} 
                    </Button>
                }
                {loading && <p className={styles.loading}>Sending Request ... </p>}              
                <button 
                    className={styles['new-account']} 
                    type="button" 
                    onClick={toggleLogin}
                >                    
                    {isLoginForm ? "Create new account" : "Login with existing account"}
                </button>
            

            </form>
        </Card>
    )
}

export default LoginPage;