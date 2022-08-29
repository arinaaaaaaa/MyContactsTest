import { RandomPhoto } from "./ContactsItem";
import styles from "../styles/components/Edit.module.scss";

function TextField(props: {title: string}) {
    return (
        <div className={styles.dataField}>
            <p>{props.title}</p>
            <input type="text" placeholder={props.title}/>
        </div>
    )
}

export default function DeleteContact() {
    return(
        <div className={styles.editItem}>
            <div className={styles.contactHeader}>
                <span><img src={RandomPhoto()} alt="contact image" /></span>
                <div className={styles.editInfo}>
                    <p className={styles.name}>Arina Krumm</p>
                </div>
            </div>
            <p className={styles.deleteNote}>Once a contact is deleted, you will not be able to restore it. Are you sure you want to delete the contact?</p>
            <button className={styles.delete}>Delete</button>
        </div>
    )
}