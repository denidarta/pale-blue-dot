import React from "react";
import styles from "./NavBar.module.css";
import { Button } from "../Button/Button";


const NavBar: React.FC = () => {
    return (
        <nav className={styles.navBar}>
            <ul className={styles.navList}>
                <li className={styles.navItem}>Beranda</li>
                <li className={styles.navItem}>Daftar Investasi</li>
                <li className={styles.navItem}>Pasar Sekunder</li>
                <li className={styles.navItem}>Berita</li>
                <li className={styles.navItem}>Event</li>
                <li className={styles.navItem}>FAQ</li>
            </ul>
            <div className={styles.buttonPair}>
                <Button label="Masuk" iconPosition="right" />
                <Button size="medium" label="Daftar" iconPosition="right" />
            </div>
        </nav>
    );
};

export default NavBar;
