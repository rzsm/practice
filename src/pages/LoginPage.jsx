import Card from "../components/UI/Card";
import Input from "../components/UI/Input";
import Button from "../components/UI/Button";
import styles from './LoginPage.module.css'

const LoginPage = () => {
    return (
        <Card className={styles.card}>
            <p className={styles['card-title']}> Login </p>
            <form className={styles['login-form']}>
                <Input label="Your Email" id="email" inputClass={styles.input}/>
                <Input label="Your Password" id="password" inputClass={styles.input + ' ' + styles['last-input']}/>
                <Button className={styles['login-btn']}> Login </Button>
            </form>
            <a className={styles['new-account']}>Create new accout</a>
        </Card>
    )
}

export default LoginPage;