import useToggle from "../hooks/useToggle";
import Card from "../components/UI/Card";
import Input from "../components/UI/Input";
import Button from "../components/UI/Button";
import styles from './LoginPage.module.css'

const LoginPage = () => {
    const [isLogin, toggleLogin] = useToggle(true); 
    
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
                />
                <Input 
                    label="Your Password" 
                    id="password" 
                    required 
                    inputClass={styles.input + ' ' + styles['last-input']}
                />
                <Button className={styles['login-btn']}> 
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