import React, { useState } from "react";

type LabeledToggleProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
};

export const LabeledToggle: React.FC<LabeledToggleProps> = ({
  checked,
  onChange,
}) => {
  return (
    <label
      style={{
        display: "inline-block",
        cursor: "pointer",
        fontFamily: "'Mulish', sans-serif",
        userSelect: "none",
      }}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        style={{ display: "none" }}
      />
      <div
        style={{
          width: "128px",
          height: "32px",
          backgroundColor: checked ? "#3699FF" : "#ccc",
          borderRadius: "4px",
          border: `1px solid ${checked ? "#23517F" : "#ccc"}`,
          position: "relative",
          transition: "background-color 0.25s ease",
          color: "white",
          fontWeight: "600",
          fontSize: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: checked ? "flex-end" : "flex-start",
          padding: "0 6px",
          boxSizing: "border-box",
          gap: "1px",
          opacity: 1,
        }}
      >
        <span
          style={{
            width: "24px",
            height: "24px",
            backgroundColor: "white",
            borderRadius: "4px",
            position: "relative",
            transition: "transform 0.25s ease",
            boxShadow: "0 0 2px rgba(0,0,0,0.2)",
            top: "21px",
            left: checked ? "23.25px" : "23.25px",
            transform: "rotate(0deg)",
          }}
        />
        <span
          style={{
            position: "absolute",
            left: checked ? "8px" : "34px",
            pointerEvents: "none",
            userSelect: "none",
            transition: "left 0.25s ease",
          }}
        >
          {checked ? "Ya" : "Tidak"}
        </span>
      </div>
    </label>
  );
};
