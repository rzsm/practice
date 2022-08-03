import { useState } from "react";
import Card from "../components/UI/Card";
import Input from "../components/UI/Input";
import Button from "../components/UI/Button";
import styles from './LoginPage.module.css'

const LoginPage = () => {
    const [isLoginForm, setIsLoginForm] = useState(true);

    const pageTitle = isLoginForm ? "Login" : "Sign Up";
    const submitBtnTxt = isLoginForm ? "Login" : "Create Account";
    const buttonBtnTxt = isLoginForm ? "Create new account" : "Login with existing account";

    const changeLoginHandler = () => {
        setIsLoginForm((prev) => !prev);
    }

    return (
        <Card className={styles.card}>
            <h1 className={styles['card-title']}> {pageTitle} </h1>
            <form className={styles['login-form']}>
                <Input label="Your Email" id="email" required inputClass={styles.input}/>
                <Input label="Your Password" id="password" required inputClass={styles.input + ' ' + styles['last-input']}/>
                <Button className={styles['login-btn']}> {submitBtnTxt} </Button>
                <button className={styles['new-account']} type="button" onClick={changeLoginHandler}>
                    {buttonBtnTxt}
                </button>
            </form>
        </Card>
    )
}

export default LoginPage;