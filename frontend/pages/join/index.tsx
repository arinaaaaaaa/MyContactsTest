import styles from "../../styles/Login.module.scss";

export default function Join() {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.formContainer}>
                <div className={styles.logo}>contactsme</div>
                <div className={styles.loginForm}>
                    <input type="text" placeholder="Name"/>
                    <input type="text" placeholder="Surname"/>
                    <input type="text" placeholder="Login"/>
                    <input type="password" placeholder="Password"/>
                    <input type="password" placeholder="Repeat password"/>
                    <button className={styles.login}>Join</button>
                </div>
                <p className={styles.join}>Already have an account? <a href="/join">Login!</a></p>
            </div>
        </div>
    )
}