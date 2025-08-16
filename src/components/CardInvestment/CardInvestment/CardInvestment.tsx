
import React from 'react';
import styles from './CardInvestment.module.css';
import InvestmentProgress from '../../ProgressBar/InvestmentProgress';


type CardInvestmentProps = {
    projectName: string;
    companyName: string;
    totalStock: number;
    invested: number;
    booked: number;
}


const CardInvestment: React.FC<CardInvestmentProps> = ({ projectName, companyName, totalStock, invested, booked }) => {
    return (
        <div className={styles['card-container']}>
            <h2 className={styles['card-title']}>{projectName}</h2>
            <p className={styles['company-name']}>{companyName}</p>
            <InvestmentProgress totalStock={totalStock} invested={invested} booked={booked} />
        </div>
    );
}

export default CardInvestment;