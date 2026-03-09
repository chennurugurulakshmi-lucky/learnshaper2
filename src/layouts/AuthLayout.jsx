import React from "react";
import { Outlet } from "react-router-dom";
import { APP_NAME } from "../utils/constants";

const AuthLayout = () => {
  return (
    <div style={styles.wrapper}>
      {/* Left Branding Section */}
      <div style={styles.left}>
        <h1 style={styles.logo}>{APP_NAME}</h1>
        <p style={styles.tagline}>
          Learn. Build. Grow your skills with real-world courses.
        </p>
      </div>

      {/* Right Form Section */}
      <div style={styles.right}>
        <div style={styles.card}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    display: "flex",
    minHeight: "100vh",
  },

  left: {
    flex: 1,
    background: "linear-gradient(135deg, #4e73df, #224abe)",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px",
  },

  logo: {
    fontSize: "36px",
    fontWeight: "bold",
    marginBottom: "20px",
  },

  tagline: {
    fontSize: "18px",
    textAlign: "center",
    maxWidth: "300px",
  },

  right: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fc",
  },

  card: {
    width: "100%",
    maxWidth: "400px",
    backgroundColor: "white",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
  },
};

export default AuthLayout;