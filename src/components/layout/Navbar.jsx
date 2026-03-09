import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  // Temporary user check (later we connect with real auth)
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>
        <Link to="/" style={styles.logoText}>
          LearnShaper
        </Link>
      </div>

      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>

        {user?.role === "learner" && (
          <>
            <Link to="/learner/courses" style={styles.link}>
              Courses
            </Link>
            <Link to="/learner/my-courses" style={styles.link}>
              My Courses
            </Link>
          </>
        )}

        {user?.role === "admin" && (
          <>
            <Link to="/admin/dashboard" style={styles.link}>
              Dashboard
            </Link>
            <Link to="/admin/course-form" style={styles.link}>
              Add Course
            </Link>
          </>
        )}
      </div>

      <div>
        {user ? (
          <button onClick={handleLogout} style={styles.button}>
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button style={styles.button}>Login</button>
          </Link>
        )}
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 40px",
    backgroundColor: "#4e73df",
    color: "white",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  logoText: {
    color: "white",
    textDecoration: "none",
    fontSize: "22px",
    fontWeight: "bold",
  },
  links: {
    display: "flex",
    gap: "20px",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "16px",
  },
  button: {
    padding: "8px 15px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#1cc88a",
    color: "white",
    cursor: "pointer",
  },
};

export default Navbar;