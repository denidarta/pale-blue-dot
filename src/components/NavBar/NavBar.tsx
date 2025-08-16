import React from "react";
import styles from "./NavBar.module.css";
import { Button } from "../Button/Button";
import NavLogo from "../../assets/custom-assets/shafiq-horizontal.svg?react";

const navItems = [
    { title: "Beranda", url: "#" },
    { title: "Daftar Investasi", url: "#" },
    { title: "Pasar Sekunder", url: "#" },
    { title: "Berita", url: "#" },
    { title: "Event", url: "#" },
    { title: "FAQ", url: "#" },
];

interface NavBarProps {
    navItems?: { title: string; url: string }[];
}

const NavBar: React.FC<NavBarProps> = ({ navItems: navItemsProp = navItems }) => {
    return (
        <nav className={styles.navBar}>
            <NavLogo className={styles.navLogo} />
            <ul className={styles.navList}>
                {navItemsProp.map((item) => (
                    <li key={item.title}>
                        <a href={item.url} className={styles.navItem}>{item.title}</a>
                    </li>
                ))}
            </ul>
            <div className={styles.buttonPair}>
                <Button label="Masuk" iconPosition="right" />
                <Button size="medium" label="Daftar" iconPosition="right" />
            </div>
        </nav>
    );
};

export default NavBar;
