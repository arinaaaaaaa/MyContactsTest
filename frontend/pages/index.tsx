import LeftMenu from "../components/LeftMenu";
import Contacts, { RandomPhoto } from "../components/ContactsItem";
import styles from "../styles/Home.module.css";
import EditContact from "../components/EditContact";
import CreateContact from '../components/CreateContact';
import DeleteContact from '../components/DeleteContact';

export default function Home() {
  return (
    <div className={styles.pageContainer}>
      <LeftMenu/>
      <div className={styles.infoContainer}>
        <div className={styles.userInfo}>
          <img src={RandomPhoto()} alt="profile photo" className="profileIcon" />
          <p className={styles.name}>Arina Krumm</p>
          <button>Log out</button>
        </div>
        {/* <div className={styles.contactsSection}>
          <div className={styles.header}>
            <span className={styles.title}>Contacts</span>
            <button className={styles.add}>Add contact</button>
          </div>
          <div className={styles.contactsList}>
            <Contacts name="Steve" surname="Smith" phone="8 (915) 316-29-01" age="28 y.o."/>
            <Contacts name="Steve" surname="Smith" phone="8 (915) 316-29-01" age="28 y.o."/>
            <Contacts name="Steve" surname="Smith" phone="8 (915) 316-29-01" age="28 y.o."/>
            <Contacts name="Steve" surname="Smith" phone="8 (915) 316-29-01" age="28 y.o."/>
            <Contacts name="Steve" surname="Smith" phone="8 (915) 316-29-01" age="28 y.o."/>
            <Contacts name="Steve" surname="Smith" phone="8 (915) 316-29-01" age="28 y.o."/>
            <Contacts name="Steve" surname="Smith" phone="8 (915) 316-29-01" age="28 y.o."/>
            <Contacts name="Steve" surname="Smith" phone="8 (915) 316-29-01" age="28 y.o."/>
            <Contacts name="Steve" surname="Smith" phone="8 (915) 316-29-01" age="28 y.o."/>
            <Contacts name="Steve" surname="Smith" phone="8 (915) 316-29-01" age="28 y.o."/>
            <Contacts name="Steve" surname="Smith" phone="8 (915) 316-29-01" age="28 y.o."/>
            <Contacts name="Steve" surname="Smith" phone="8 (915) 316-29-01" age="28 y.o."/>
          </div>
        </div> */}
        {/* <div className={styles.editSection}>
          <div className={styles.header}>
            <span className={styles.title}>Edit contact</span>
            <button className={styles.add}>Cancel</button>
          </div>
          <div className={styles.editContent}>
            <EditContact/>
          </div>
        </div> */}
        {/* <div className={styles.editSection}>
          <div className={styles.header}>
            <span className={styles.title}>Create contact</span>
            <button className={styles.add}>Cancel</button>
          </div>
          <div className={styles.editContent}>
            <CreateContact/>
          </div>
        </div> */}
        <div className={styles.editSection}>
          <div className={styles.header}>
            <span className={styles.title}>Delete contact</span>
            <button className={styles.add}>Cancel</button>
          </div>
          <div className={styles.editContent}>
            <DeleteContact/>
          </div>
        </div>
      </div>
    </div>
  )
}