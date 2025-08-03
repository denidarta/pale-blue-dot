import React from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  size?: "small" | "medium" | "large";
  cornerRadius?: "rounded" | "circular";
  disabled?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  size = "medium",
  cornerRadius = "rounded",
  disabled = false,
}) => {
  return (
    <button
      className={`${styles.buttonBase} ${styles[size]} ${
        styles[cornerRadius]
      } ${disabled ? styles.disabled : ""}`}
      disabled={disabled}
      onClick={(e) => {
        if (disabled) return;
        if (onClick) onClick(e);
      }}
    >
      {label}
    </button>
  );
};
