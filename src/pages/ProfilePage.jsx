import Input from '../components/UI/Input';
import Button from '../components/UI/Button';
import styles from './ProfilePage.module.css';

export default function ProfilePage() {
  return (
    <secton style={{"text-align":"center"}}>
        <h1 className={styles.title}>Your User Profile</h1>
        <form>
            <Input label="New Password" id="new-pass" inputClass={styles.input}/>
            <Button className={styles.btn}>Change Password</Button>
        </form>       
    </secton>
  )
}
