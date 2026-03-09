import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Courses = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");

  const courses = [
    {
      id: 1,
      title: "Frontend Development",
      instructor: "Lakshmi Professor",
      category: "Web Development",
      price: 5999,
      duration: "6 Weeks",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    },
    {
      id: 2,
      title: "Artificial Intelligence",
      instructor: "Dr. Narmadha",
      category: "AI & ML",
      price: 4999,
      duration: "8 Weeks",
      image:
        "https://images.unsplash.com/photo-1507146426996-ef05306b995a",
    },
    {
      id: 3,
      title: "React Mastery",
      instructor: "Govardhan.Phd",
      category: "Frontend",
      price: 3999,
      duration: "5 Weeks",
      image:
        "https://images.unsplash.com/photo-1581276879432-15e50529f34b",
    },
  ];

  const filteredCourses = courses.filter((course) => {
    return (
      course.title.toLowerCase().includes(search.toLowerCase()) &&
      (categoryFilter === "All" || course.category === categoryFilter)
    );
  });

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Available Courses</h2>

      {/* Search & Filter */}
      <div style={styles.topBar}>
        <input
          type="text"
          placeholder="Search courses..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={styles.search}
        />

        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          style={styles.select}
        >
          <option value="All">All Categories</option>
          <option value="Web Development">Web Development</option>
          <option value="AI & ML">AI & ML</option>
          <option value="Frontend">Frontend</option>
        </select>
      </div>

      {/* Course Grid */}
      <div style={styles.grid}>
        {filteredCourses.length === 0 ? (
          <p style={{ color: "white" }}>No courses found.</p>
        ) : (
          filteredCourses.map((course) => (
            <div key={course.id} style={styles.card}>
              <img
                src={course.image}
                alt={course.title}
                style={styles.image}
              />

              <div style={styles.content}>
                <h3>{course.title}</h3>
                <p><strong>Instructor:</strong> {course.instructor}</p>
                <p><strong>Duration:</strong> {course.duration}</p>
                <p style={styles.price}>₹{course.price}</p>

                {/* ONLY CHANGE IS HERE */}
                <button
                  style={styles.button}
                  onClick={() => navigate(`/enroll/${course.title}`)}
                >
                  Enroll Now
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
    background: "linear-gradient(135deg, #4e73df, #1cc88a)",
  },
  heading: {
    textAlign: "center",
    color: "white",
    marginBottom: "30px",
  },
  topBar: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginBottom: "30px",
    flexWrap: "wrap",
  },
  search: {
    padding: "10px",
    borderRadius: "8px",
    border: "none",
    width: "250px",
  },
  select: {
    padding: "10px",
    borderRadius: "8px",
    border: "none",
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
    transition: "0.3s",
  },
  image: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
  },
  content: {
    padding: "20px",
  },
  price: {
    fontWeight: "bold",
    fontSize: "18px",
    color: "#4e73df",
  },
  button: {
    marginTop: "10px",
    padding: "10px",
    width: "100%",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#1cc88a",
    color: "white",
    cursor: "pointer",
  },
};

export default Courses;