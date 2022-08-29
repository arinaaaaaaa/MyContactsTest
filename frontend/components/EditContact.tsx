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

export default function EditContact() {
    return(
        <div className={styles.editItem}>
            <div className={styles.contactHeader}>
                <span><img src={RandomPhoto()} alt="contact image" /></span>
                <div className={styles.editInfo}>
                    <p className={styles.name}>Arina Krumm</p>
                    <p className={styles.note}>Enter your new contact details in the fields you want to change, then click Save.</p>
                </div>
            </div>
            <div className={styles.textFields}>
                <TextField title="Name"/>
                <TextField title="Surname"/>
                <TextField title="Age"/>
                <TextField title="Phone"/>
            </div>
            <button className={styles.save}>Save</button>
        </div>
    )
}