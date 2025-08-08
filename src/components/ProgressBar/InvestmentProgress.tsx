import React from "react";
import styles from "./InvestmentProgress.module.css";

type InvestmentProgressProps = {
  totalStock: number;
  invested: number;
  booked: number;
};

const InvestmentProgress: React.FC<InvestmentProgressProps> = ({ totalStock, invested, booked }) => {
  const investedPercent = (invested / totalStock) * 100;
  const bookedPercent = (booked / totalStock) * 100;

  return (
    <div className={styles.container}>
      <div
        className={styles.invested}
        style={{ width: `${investedPercent}%` }}
      />
      <div
        className={styles.booked}
        style={{ width: `${bookedPercent}%` }}
      />
    </div>
  );
};

export default InvestmentProgress;