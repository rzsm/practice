import Card from "../components/UI/Card";
import Input from "../components/UI/Input";
import Button from "../components/UI/Button";
import styles from './LoginPage.module.css'

const LoginPage = () => {
    return (
        <Card className={styles.card}>
            <h1 className={styles['card-title']}> Login </h1>
            <form className={styles['login-form']}>
                <Input label="Your Email" id="email" required inputClass={styles.input}/>
                <Input label="Your Password" id="password" required inputClass={styles.input + ' ' + styles['last-input']}/>
                <Button className={styles['login-btn']}> Login </Button>
                <button className={styles['new-account']} type="button">
                    Create new accout
                </button>
            </form>
        </Card>
    )
}

export default LoginPage;