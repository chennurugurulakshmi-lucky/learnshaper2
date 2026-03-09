import React, { useState } from "react";

const CourseForm = () => {
  const [course, setCourse] = useState({
    title: "",
    instructor: "",
    category: "",
    price: "",
    duration: "",
    thumbnail: "",
    description: "",
  });

  const handleChange = (e) => {
    setCourse({
      ...course,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Course Added:", course);
    alert("Course Added Successfully!");
    setCourse({
      title: "",
      instructor: "",
      category: "",
      price: "",
      duration: "",
      thumbnail: "",
      description: "",
    });
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Add New Course</h2>

        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            name="title"
            placeholder="Course Title"
            value={course.title}
            onChange={handleChange}
            style={styles.input}
            required
          />

          <input
            type="text"
            name="instructor"
            placeholder="Instructor Name"
            value={course.instructor}
            onChange={handleChange}
            style={styles.input}
            required
          />

          <input
            type="text"
            name="category"
            placeholder="Category (e.g., Frontend, AI)"
            value={course.category}
            onChange={handleChange}
            style={styles.input}
            required
          />

          <input
            type="number"
            name="price"
            placeholder="Price (₹)"
            value={course.price}
            onChange={handleChange}
            style={styles.input}
            required
          />

          <input
            type="text"
            name="duration"
            placeholder="Duration (e.g., 6 Weeks)"
            value={course.duration}
            onChange={handleChange}
            style={styles.input}
            required
          />

          <input
            type="text"
            name="thumbnail"
            placeholder="Thumbnail Image URL"
            value={course.thumbnail}
            onChange={handleChange}
            style={styles.input}
          />

          <textarea
            name="description"
            placeholder="Course Description"
            value={course.description}
            onChange={handleChange}
            style={styles.textarea}
            required
          ></textarea>

          <button type="submit" style={styles.button}>
            Add Course
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
  },
  card: {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "15px",
    width: "400px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    marginBottom: "15px",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },
  textarea: {
    marginBottom: "15px",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "14px",
    minHeight: "80px",
  },
  button: {
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#667eea",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
    transition: "0.3s",
  },
};

export default CourseForm;