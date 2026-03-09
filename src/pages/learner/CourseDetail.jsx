import React from "react";
import { useParams } from "react-router-dom";

const CoursesDetail = () => {
  const { id } = useParams();

  // Dummy course data (later we connect dynamically)
  const course = {
    id: id,
    title: "Frontend Development Mastery",
    instructor: "Lakshmi",
    duration: "6 Weeks",
    price: 5999,
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    description:
      "This course will teach you HTML, CSS, JavaScript, and React from beginner to advanced level. You will build real-world projects and gain industry-ready skills.",
    learnings: [
      "Build responsive websites",
      "Master JavaScript fundamentals",
      "Learn React from scratch",
      "Create real-world projects",
    ],
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <img src={course.image} alt={course.title} style={styles.image} />

        <div style={styles.content}>
          <h2>{course.title}</h2>
          <p><strong>Instructor:</strong> {course.instructor}</p>
          <p><strong>Duration:</strong> {course.duration}</p>
          <p style={styles.price}>₹{course.price}</p>

          <hr style={{ margin: "20px 0" }} />

          <h3>Course Description</h3>
          <p>{course.description}</p>

          <h3 style={{ marginTop: "20px" }}>What You'll Learn</h3>
          <ul>
            {course.learnings.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <button style={styles.button}>Enroll Now</button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    padding: "40px",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    display: "flex",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "white",
    maxWidth: "900px",
    width: "100%",
    borderRadius: "15px",
    overflow: "hidden",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
  },
  image: {
    width: "100%",
    height: "300px",
    objectFit: "cover",
  },
  content: {
    padding: "30px",
  },
  price: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#667eea",
  },
  button: {
    marginTop: "20px",
    padding: "12px 20px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#764ba2",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default CoursesDetail;