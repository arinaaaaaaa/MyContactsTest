import styles from "../../styles/Login.module.scss";

export default function Login() {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.formContainer}>
                <div className={styles.logo}>contactsme</div>
                <div className={styles.loginForm}>
                    <input type="text" placeholder="Login"/>
                    <input type="password" placeholder="Password" />
                    <button className={styles.login}>Login</button>
                </div>
                <p className={styles.join}>First time with us? <a href="/join">Join!</a></p>
            </div>
        </div>
    )
}