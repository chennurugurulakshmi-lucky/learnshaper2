import React, { useState } from "react";

const Reviews = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Anitha",
      rating: 5,
      comment: "Excellent course! Very clear explanations.",
    },
    {
      id: 2,
      name: "Rahul",
      rating: 4,
      comment: "Very helpful and practical examples.",
    },
  ]);

  const [newReview, setNewReview] = useState({
    name: "",
    rating: 5,
    comment: "",
  });

  const handleChange = (e) => {
    setNewReview({
      ...newReview,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newReview.name || !newReview.comment) {
      alert("Please fill all fields");
      return;
    }

    setReviews([
      ...reviews,
      { ...newReview, id: reviews.length + 1 },
    ]);

    setNewReview({
      name: "",
      rating: 5,
      comment: "",
    });
  };

  const renderStars = (count) => {
    return "⭐".repeat(count);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Course Reviews</h2>

      {/* Review Form */}
      <div style={styles.formCard}>
        <h3>Add Your Review</h3>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={newReview.name}
            onChange={handleChange}
            style={styles.input}
          />

          <select
            name="rating"
            value={newReview.rating}
            onChange={handleChange}
            style={styles.input}
          >
            <option value="5">5 Stars</option>
            <option value="4">4 Stars</option>
            <option value="3">3 Stars</option>
            <option value="2">2 Stars</option>
            <option value="1">1 Star</option>
          </select>

          <textarea
            name="comment"
            placeholder="Write your review..."
            value={newReview.comment}
            onChange={handleChange}
            style={styles.textarea}
          />

          <button type="submit" style={styles.button}>
            Submit Review
          </button>
        </form>
      </div>

      {/* Review List */}
      <div style={styles.reviewList}>
        {reviews.map((review) => (
          <div key={review.id} style={styles.reviewCard}>
            <h4>{review.name}</h4>
            <p style={styles.stars}>{renderStars(review.rating)}</p>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "40px",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #f7971e, #ffd200)",
  },
  heading: {
    textAlign: "center",
    marginBottom: "30px",
  },
  formCard: {
    backgroundColor: "white",
    maxWidth: "500px",
    margin: "0 auto 40px",
    padding: "25px",
    borderRadius: "15px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
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
  },
  textarea: {
    marginBottom: "15px",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    minHeight: "80px",
  },
  button: {
    padding: "10px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#f7971e",
    color: "white",
    cursor: "pointer",
  },
  reviewList: {
    maxWidth: "700px",
    margin: "0 auto",
  },
  reviewCard: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "12px",
    marginBottom: "20px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
  },
  stars: {
    color: "#ff9800",
    fontWeight: "bold",
  },
};

export default Reviews;