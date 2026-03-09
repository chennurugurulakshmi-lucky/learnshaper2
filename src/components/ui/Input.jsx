import React from "react";

const Input = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  name,
  required = false,
  error = "",
  disabled = false,
  style = {},
}) => {
  return (
    <div style={styles.container}>
      {label && (
        <label style={styles.label}>
          {label}
          {required && <span style={styles.required}> *</span>}
        </label>
      )}

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        disabled={disabled}
        style={{
          ...styles.input,
          borderColor: error ? "#dc3545" : "#ced4da",
          backgroundColor: disabled ? "#f8f9fa" : "white",
          ...style,
        }}
      />

      {error && <span style={styles.error}>{error}</span>}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "18px",
    width: "100%",
  },
  label: {
    marginBottom: "6px",
    fontSize: "14px",
    fontWeight: "500",
  },
  required: {
    color: "#dc3545",
  },
  input: {
    padding: "10px 14px",
    fontSize: "15px",
    borderRadius: "8px",
    border: "1px solid #ced4da",
    outline: "none",
    transition: "0.3s ease",
  },
  error: {
    marginTop: "5px",
    fontSize: "13px",
    color: "#dc3545",
  },
};

export default Input;