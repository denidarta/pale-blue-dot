import React from "react";
import styles from "./LabeledToggle.module.css";

type LabeledToggleProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
};

export const LabeledToggle: React.FC<LabeledToggleProps> = ({
  checked,
  onChange,
}) => {
  return (
    <label className={styles.label}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className={styles.hiddenInput}
      />
      <div
        className={`${styles.toggleContainer} ${
          checked ? styles.checkedBackground : ""
        }`}
      >
        <div
          className={`${styles.labelYa} ${
            checked ? styles.labelChecked : styles.labelUnchecked
          }`}
        >
          Ya
        </div>
        <div className={`${styles.labelTidak}`}>Tidak</div>
        <div
          className={`${styles.toggleThumb} ${
            checked ? styles.checkedThumb : ""
          }`}
        />
      </div>
    </label>
  );
};
