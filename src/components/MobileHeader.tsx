import React from 'react';
import styles from './MobileHeader.module.css';
import { Menu } from 'lucide-react'; // or your preferred icon library
import imgLogo from '../assets/logo.svg'; // adjust path as needed

const MobileHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <img
            src={imgLogo}
            alt="SHAFIQ Logo"
            className={styles.logo}
          />
        </div>
        <button className={styles.menuButton}>
          <Menu className={styles.menuIcon} />
        </button>
      </div>
    </header>
  );
};

export default MobileHeader;