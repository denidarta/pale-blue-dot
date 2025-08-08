import React from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: "primary" | "secondary";
  color?: "blue" | "green" | "red";
  textColor?: "white" | "black";
  size?: "small" | "medium" | "large";
  cornerRadius?: "rounded" | "circular";
  disabled?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
};

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  size = "medium",
  cornerRadius = "rounded",
  disabled = false,
  icon,
  iconPosition = "left",
}) => {
  return (
    <button
      className={`
        ${styles.buttonBase} 
        ${styles[size]} 
        ${styles[cornerRadius]} 
        ${disabled ? styles.disabled : ""}`}
      disabled={disabled}
      onClick={(e) => { if (disabled) return; if (onClick) onClick(e); }}>
      {icon && iconPosition === "left" && (
        <span className={styles.icon} style={{ marginRight: label ? 8 : 0 }}>{icon}</span>
      )}
      {label}
      {icon && iconPosition === "right" && (
        <span className={styles.icon} style={{ marginLeft: label ? 8 : 0 }}>{icon}</span>
      )}
    </button>
  );
};
