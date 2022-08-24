import styles from "../styles/components/Menu.module.scss";

function MenuItem(props: { imagePath: string, title: string }) {
    return (
        <div className={styles.menuItem}>
            <img src={props.imagePath} alt="item icon" />
            <p>{props.title}</p>
        </div>
    )
}

export default function LeftMenu() {
    return (
        <div className="manu">
            <div className={styles.menuContainer}>
                <p className={styles.logo}>contactsme</p>
                <div className={styles.menuList}>
                    <MenuItem imagePath = "images/user.svg" title="Contacts"/>
                </div>
            </div>
        </div>
    )
}