import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import Badge from "../ui/Badge";

const CourseCard = ({ course }) => {
  const navigate = useNavigate();

  return (
    <div style={styles.card}>
      {/* Course Image */}
      <img
        src={course.image}
        alt={course.title}
        style={styles.image}
      />

      {/* Card Body */}
      <div style={styles.body}>
        <div style={styles.header}>
          <h3 style={styles.title}>{course.title}</h3>
          <Badge variant="info">{course.level}</Badge>
        </div>

        <p style={styles.instructor}>By {course.instructor}</p>

        <div style={styles.rating}>
          ⭐ {course.rating} ({course.students} students)
        </div>

        <div style={styles.footer}>
          <span style={styles.price}>₹ {course.price}</span>

          <div style={{ display: "flex", gap: "8px" }}>
            <Button
              size="small"
              onClick={() => navigate(`/learner/courses/${course.id}`)}
            >
              View
            </Button>

            <Button
              size="small"
              variant="success"
              onClick={() => navigate(`/enroll/${course.id}`)}
            >
              Enroll
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: "white",
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
    overflow: "hidden",
    transition: "0.3s ease",
    cursor: "pointer",
  },
  image: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
  },
  body: {
    padding: "15px",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: "18px",
    margin: 0,
  },
  instructor: {
    fontSize: "14px",
    color: "#666",
    margin: "8px 0",
  },
  rating: {
    fontSize: "14px",
    marginBottom: "12px",
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    fontWeight: "bold",
    fontSize: "16px",
    color: "#4e73df",
  },
};

export default CourseCard;