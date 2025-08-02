import React from "react";

type RadioButtonProps = {
  label: string;
  name: string;
  value: string;
  checked?: boolean;
  onChange?: (value: string) => void;
};

export const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  name,
  value,
  checked = false,
  onChange,
}) => {
  return (
    <label
      style={{
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        gap: "8px",
        userSelect: "none",
        fontFamily: "'Mulish', sans-serif",
      }}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange && onChange(value)}
        style={{ cursor: "pointer" }}
      />
      {label}
    </label>
  );
};
