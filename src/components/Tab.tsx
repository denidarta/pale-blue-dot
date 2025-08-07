import React from "react";
import styles from "./Tab.module.css";

type TabProps = {
  label: string;
  onClick: () => void;
  active?: boolean;
};

const Tab: React.FC<TabProps> = ({ label, onClick, active = false }) => {
  return (
    <button
      className={`${styles.tab} ${active ? styles.active : ""}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Tab;
