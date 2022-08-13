import { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';
import { useToken } from '../context/auth-context';
import Input from '../components/UI/Input';
import Button from '../components/UI/Button';
import styles from './ProfilePage.module.css';

const API_KEY = 'AIzaSyDkgsq8Ui7-n5sOgpLFcdxNoVEhAKmtEtE';

export default function ProfilePage() {
    const [newPassword, setNewPassword] = useState();
    const token = useToken();
    const {loading, value, error, asyncFn: changePasswordRequest} 
        = useFetch(`https://identitytoolkit.googleapis.com/v1/accounts:update?key=${API_KEY}`,
        {
            method: 'POST',
            body: JSON.stringify({
                idToken: token,
                password: newPassword,
                returnSecureToken: false
            })
        })

    useEffect(() => {
        console.log(error);
    }, [error])

    const submitHandler = (event) => {
        event.preventDefault();
        changePasswordRequest();
    }
    return (
    <section style={{"textAlign":"center"}}>
        <h1 className={styles.title}>Your User Profile</h1>
        <form onSubmit={submitHandler}>
            <Input 
                label="New Password" 
                id="new-pass" 
                inputClass={styles.input} 
                onChange={(e) => setNewPassword(e.target.value)}
                type="password"
            />
            {!loading && <Button className={styles.btn}>Change Password</Button>}
            {loading && <p className={styles.loading}>Sending Request ... </p>}
        </form>       
    </section>
    )
}
