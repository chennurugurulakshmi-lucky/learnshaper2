import React from "react";

const StatsCard = ({
  title,
  value,
  icon,
  bgColor = "#4e73df",
  textColor = "white",
}) => {
  return (
    <div style={{ ...styles.card, backgroundColor: bgColor }}>
      <div style={styles.content}>
        <div>
          <p style={styles.title}>{title}</p>
          <h2 style={{ ...styles.value, color: textColor }}>{value}</h2>
        </div>

        {icon && <div style={styles.icon}>{icon}</div>}
      </div>
    </div>
  );
};

const styles = {
  card: {
    padding: "20px",
    borderRadius: "14px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
    transition: "0.3s ease",
    cursor: "pointer",
  },
  content: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: "14px",
    margin: 0,
    opacity: 0.9,
  },
  value: {
    margin: "8px 0 0",
    fontSize: "26px",
    fontWeight: "bold",
  },
  icon: {
    fontSize: "32px",
    opacity: 0.8,
  },
};

export default StatsCard;