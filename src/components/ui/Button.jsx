import React from "react";

const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  size = "medium",
  disabled = false,
  style = {},
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case "secondary":
        return {
          backgroundColor: "#6c757d",
          color: "white",
        };
      case "success":
        return {
          backgroundColor: "#28a745",
          color: "white",
        };
      case "danger":
        return {
          backgroundColor: "#dc3545",
          color: "white",
        };
      case "outline":
        return {
          backgroundColor: "transparent",
          color: "#4e73df",
          border: "2px solid #4e73df",
        };
      default:
        return {
          backgroundColor: "#4e73df",
          color: "white",
        };
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case "small":
        return {
          padding: "6px 12px",
          fontSize: "14px",
        };
      case "large":
        return {
          padding: "14px 28px",
          fontSize: "18px",
        };
      default:
        return {
          padding: "10px 20px",
          fontSize: "16px",
        };
    }
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={{
        border: "none",
        borderRadius: "8px",
        cursor: disabled ? "not-allowed" : "pointer",
        transition: "0.3s ease",
        opacity: disabled ? 0.6 : 1,
        ...getVariantStyles(),
        ...getSizeStyles(),
        ...style,
      }}
      onMouseOver={(e) => {
        if (!disabled) e.target.style.opacity = "0.85";
      }}
      onMouseOut={(e) => {
        if (!disabled) e.target.style.opacity = "1";
      }}
    >
      {children}
    </button>
  );
};

export default Button;