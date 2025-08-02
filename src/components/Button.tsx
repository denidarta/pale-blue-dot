import React from "react";

type ButtonProps = {
  label: string;
  onClick?: () => void;
  size?: "small" | "medium" | "large";
  cornerRadius?: "rounded" | "circular";
};

const sizeStyles = {
  small: {
    height: 28,
    fontSize: 12,
    padding: "6px 12px",
  },
  medium: {
    height: 32,
    fontSize: 14,
    padding: "8px 16px",
  },
  large: {
    height: 40,
    fontSize: 16,
    padding: "10px 20px",
  },
};

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  size = "medium",
  cornerRadius = "rounded",
}) => {
  const { height, fontSize, padding } = sizeStyles[size];

  // Calculate borderRadius based on cornerRadius prop
  const borderRadius = cornerRadius === "circular" ? `${height / 2}px` : "6px";

  return (
    <button
      style={{
        backgroundColor: "#23517F",
        color: "white",
        height,
        fontSize,
        padding,
        borderRadius,
        border: "none",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
        fontFamily: '"Mulish", sans-serif',
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        userSelect: "none",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1a3b5c")}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#23517F")}
      onClick={(e) => {
        console.log("Button clicked:", label);
        if (onClick) onClick();
      }}
    >
      {label}
    </button>
  );
};
