import React from "react";

const Badge = ({ children, variant = "primary", size = "medium", style = {} }) => {
  const getVariantStyles = () => {
    switch (variant) {
      case "success":
        return {
          backgroundColor: "#d4edda",
          color: "#155724",
        };
      case "danger":
        return {
          backgroundColor: "#f8d7da",
          color: "#721c24",
        };
      case "warning":
        return {
          backgroundColor: "#fff3cd",
          color: "#856404",
        };
      case "info":
        return {
          backgroundColor: "#d1ecf1",
          color: "#0c5460",
        };
      case "secondary":
        return {
          backgroundColor: "#e2e3e5",
          color: "#383d41",
        };
      default:
        return {
          backgroundColor: "#e0e7ff",
          color: "#3730a3",
        };
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case "small":
        return {
          padding: "4px 8px",
          fontSize: "12px",
        };
      case "large":
        return {
          padding: "8px 14px",
          fontSize: "14px",
        };
      default:
        return {
          padding: "6px 12px",
          fontSize: "13px",
        };
    }
  };

  return (
    <span
      style={{
        borderRadius: "20px",
        fontWeight: "500",
        display: "inline-block",
        ...getVariantStyles(),
        ...getSizeStyles(),
        ...style,
      }}
    >
      {children}
    </span>
  );
};

export default Badge;