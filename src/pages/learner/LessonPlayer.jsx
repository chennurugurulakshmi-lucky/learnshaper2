import React, { useState } from "react";

const LessonPlayer = () => {
  const lessons = [
    {
      id: 1,
      title: "Introduction to HTML",
      video: "https://www.youtube.com/embed/qz0aGYrrlhU",
      description: "Learn the basics of HTML structure and tags.",
    },
    {
      id: 2,
      title: "CSS Fundamentals",
      video: "https://www.youtube.com/embed/1PnVor36_40",
      description: "Understand styling using CSS.",
    },
    {
      id: 3,
      title: "JavaScript Basics",
      video: "https://www.youtube.com/embed/W6NZfCO5SIk",
      description: "Learn variables, functions and logic building.",
    },
  ];

  const [currentLesson, setCurrentLesson] = useState(lessons[0]);

  return (
    <div style={styles.container}>
      
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <h3 style={{ marginBottom: "15px" }}>Course Content</h3>
        {lessons.map((lesson) => (
          <div
            key={lesson.id}
            onClick={() => setCurrentLesson(lesson)}
            style={{
              ...styles.lessonItem,
              backgroundColor:
                currentLesson.id === lesson.id ? "#5b86e5" : "transparent",
              color:
                currentLesson.id === lesson.id ? "white" : "#333",
            }}
          >
            {lesson.title}
          </div>
        ))}
      </div>

      {/* Video Section */}
      <div style={styles.videoSection}>
        <h2>{currentLesson.title}</h2>

        <div style={styles.videoWrapper}>
          <iframe
            width="100%"
            height="400"
            src={currentLesson.video}
            title="Lesson Video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>

        <p style={{ marginTop: "15px" }}>
          {currentLesson.description}
        </p>

        <button style={styles.button}>
          Mark as Completed
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    minHeight: "100vh",
    background: "#f4f6f9",
  },
  sidebar: {
    width: "280px",
    backgroundColor: "white",
    padding: "20px",
    borderRight: "1px solid #ddd",
  },
  lessonItem: {
    padding: "10px",
    borderRadius: "8px",
    cursor: "pointer",
    marginBottom: "10px",
    transition: "0.3s",
  },
  videoSection: {
    flex: 1,
    padding: "30px",
  },
  videoWrapper: {
    marginTop: "15px",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
  },
  button: {
    marginTop: "20px",
    padding: "10px 20px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#5b86e5",
    color: "white",
    cursor: "pointer",
  },
};

export default LessonPlayer;