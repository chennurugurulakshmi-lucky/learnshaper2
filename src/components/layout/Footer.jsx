import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        
        {/* Brand Section */}
        <div style={styles.section}>
          <h3 style={styles.logo}>LearnShaper</h3>
          <p style={styles.text}>
            Empowering learners with high-quality courses and practical skills.
          </p>
        </div>

        {/* Quick Links */}
        <div style={styles.section}>
          <h4>Quick Links</h4>
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/learner/courses" style={styles.link}>Courses</Link>
          <Link to="/login" style={styles.link}>Login</Link>
          <Link to="/register" style={styles.link}>Register</Link>
        </div>

        {/* Contact Section */}
        <div style={styles.section}>
          <h4>Contact</h4>
          <p style={styles.text}>📧 support@learnshaper.com</p>
          <p style={styles.text}>📞 +91 98765 43210</p>
          <p style={styles.text}>📍 Chennai, India</p>
        </div>

        {/* Social Section */}
        <div style={styles.section}>
          <h4>Follow Us</h4>
          <p style={styles.text}>🌐 Facebook</p>
          <p style={styles.text}>🌐 Instagram</p>
          <p style={styles.text}>🌐 LinkedIn</p>
        </div>

      </div>

      <div style={styles.bottom}>
        © {new Date().getFullYear()} LearnShaper. All rights reserved.
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#2c3e50",
    color: "white",
    paddingTop: "40px",
    marginTop: "50px",
  },
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "30px",
    padding: "0 40px 30px",
  },
  section: {
    display: "flex",
    flexDirection: "column",
  },
  logo: {
    marginBottom: "10px",
  },
  text: {
    fontSize: "14px",
    marginBottom: "8px",
  },
  link: {
    color: "#1cc88a",
    textDecoration: "none",
    marginBottom: "8px",
    fontSize: "14px",
  },
  bottom: {
    textAlign: "center",
    padding: "15px",
    backgroundColor: "#1a252f",
    fontSize: "14px",
  },
};

export default Footer;