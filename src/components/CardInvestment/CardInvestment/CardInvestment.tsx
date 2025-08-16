
import React from 'react';
import styles from './CardInvestment.module.css';
import InvestmentProgress from '../../ProgressBar/InvestmentProgress';


type CardInvestmentProps = {

}


const CardInvestment: React.FC<CardInvestmentProps> = () => {
    return (
        <div className={styles['card-container']}>
            <h2 className={styles['card-title']}>Project Name</h2>
            <p className={styles['company-name']}>Nama Perusahaan</p>
            <InvestmentProgress totalStock={100} invested={60} booked={20}/>
        </div>
    );
}

export default CardInvestment;