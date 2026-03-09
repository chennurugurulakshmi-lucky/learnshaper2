import React from "react";

const MyCourses = () => {
  const enrolledCourses = [
    {
      id: 1,
      title: "Frontend Development",
      instructor: "Lakshmi",
      progress: 70,
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    },
    {
      id: 2,
      title: "Artificial Intelligence",
      instructor: "Dr. Kumar",
      progress: 45,
      image:
        "https://images.unsplash.com/photo-1507146426996-ef05306b995a",
    },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>My Courses</h2>

      <div style={styles.grid}>
        {enrolledCourses.length === 0 ? (
          <p style={{ color: "white" }}>You have not enrolled in any courses yet.</p>
        ) : (
          enrolledCourses.map((course) => (
            <div key={course.id} style={styles.card}>
              <img
                src={course.image}
                alt={course.title}
                style={styles.image}
              />

              <div style={styles.content}>
                <h3>{course.title}</h3>
                <p><strong>Instructor:</strong> {course.instructor}</p>

                {/* Progress Bar */}
                <div style={styles.progressContainer}>
                  <div
                    style={{
                      ...styles.progressBar,
                      width: `${course.progress}%`,
                    }}
                  ></div>
                </div>
                <p style={styles.progressText}>{course.progress}% Completed</p>

                <button style={styles.button}>
                  Continue Learning
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "40px",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #36d1dc, #5b86e5)",
  },
  heading: {
    textAlign: "center",
    color: "white",
    marginBottom: "30px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "25px",
  },
  card: {
    backgroundColor: "white",
    borderRadius: "15px",
    overflow: "hidden",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
  },
  image: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
  },
  content: {
    padding: "20px",
  },
  progressContainer: {
    height: "10px",
    backgroundColor: "#e0e0e0",
    borderRadius: "5px",
    marginTop: "10px",
    overflow: "hidden",
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#36d1dc",
  },
  progressText: {
    marginTop: "8px",
    fontSize: "14px",
    fontWeight: "bold",
    color: "#5b86e5",
  },
  button: {
    marginTop: "15px",
    padding: "10px",
    width: "100%",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#5b86e5",
    color: "white",
    cursor: "pointer",
  },
};

export default MyCourses;