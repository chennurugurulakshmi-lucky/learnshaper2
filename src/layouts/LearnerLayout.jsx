import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import useAuth from "../hooks/useAuth";
import { ROUTES } from "../utils/constants";

const LearnerLayout = () => {
  const { user } = useAuth();

  return (
    <>
      <Navbar />

      <div style={styles.wrapper}>
        {/* Sidebar */}
        <div style={styles.sidebar}>
          <div style={styles.profile}>
            <div style={styles.avatar}>
              {user?.name?.charAt(0).toUpperCase()}
            </div>
            <p style={styles.username}>{user?.name}</p>
          </div>

          <nav style={styles.nav}>
            <Link style={styles.link} to={ROUTES.COURSES}>
              📚 All Courses
            </Link>
            <Link style={styles.link} to={ROUTES.MY_COURSES}>
              🎓 My Courses
            </Link>
          </nav>
        </div>

        {/* Main Content */}
        <div style={styles.content}>
          <Outlet />
        </div>
      </div>

      <Footer />
    </>
  );
};

const styles = {
  wrapper: {
    display: "flex",
    minHeight: "80vh",
  },

  sidebar: {
    width: "250px",
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRight: "1px solid #eee",
    boxShadow: "2px 0 10px rgba(0,0,0,0.03)",
  },

  profile: {
    textAlign: "center",
    marginBottom: "30px",
  },

  avatar: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    backgroundColor: "#4e73df",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "22px",
    margin: "0 auto 10px",
  },

  username: {
    fontWeight: "600",
  },

  nav: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },

  link: {
    padding: "10px 15px",
    borderRadius: "8px",
    textDecoration: "none",
    color: "#5a5c69",
    transition: "0.3s",
  },

  content: {
    flex: 1,
    padding: "30px",
    backgroundColor: "#f8f9fc",
  },
};

export default LearnerLayout;