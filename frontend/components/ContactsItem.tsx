import styles from "../styles/components/ContactItem.module.scss";

export default function Contacts(props:{name:string, surname?: string, phone:string, age?: string}) {
    return (
      <div className={styles.contactsItem}>
        <div className={styles.userInfo}>
          <div className={styles.userPhoto}><img src="images/profile.jpeg" alt="" /></div>
          <span className={styles.info}>
            <p className={styles.name}>{props.name} {props.surname}</p>
            <p className={styles.age}>{props.age}</p>
            <p className={styles.phone}>{props.phone}</p>
          </span>
        </div>
        <span className={styles.buttons}>
          <button className={styles.edit}>Edit</button>
          <button className={styles.delete}>Delete</button>
        </span>
      </div>
    )
}