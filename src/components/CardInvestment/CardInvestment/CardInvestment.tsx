
import React from 'react';
import styles from './CardInvestment.module.css';


type CardInvestmentProps = {

}


const CardInvestment: React.FC<CardInvestmentProps> = () => {
    return (
        <div className={styles.cardInvestment}>
            <h2 className={styles.title}>Investasi Terbaru</h2>
            <p className={styles.description}>Dapatkan informasi terbaru tentang investasi yang tersedia.</p>
            <button className={styles.investButton}>Invest Now</button>
        </div>
    );
}

export default CardInvestment;