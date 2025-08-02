import React from "react";

type ToggleProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
};

export const Toggle = ({ checked, onChange, label }: ToggleProps) => {
  return (
    <label
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        cursor: "pointer",
        fontFamily: "'Mulish', sans-serif",
      }}
    >
      {label && <span>{label}</span>}
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        style={{ display: "none" }}
      />
      <span
        style={{
          width: "40px",
          height: "20px",
          backgroundColor: checked ? "#23517F" : "#ccc",
          borderRadius: "10px",
          position: "relative",
          transition: "background-color 0.2s ease",
        }}
      >
        <span
          style={{
            content: '""',
            position: "absolute",
            top: "2px",
            left: checked ? "22px" : "2px",
            width: "16px",
            height: "16px",
            backgroundColor: "white",
            borderRadius: "50%",
            transition: "left 0.2s ease",
          }}
        />
      </span>
    </label>
  );
};
