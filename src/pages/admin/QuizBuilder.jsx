import React, { useState } from "react";

const QuizBuilder = () => {
  const [questionData, setQuestionData] = useState({
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    correctAnswer: "",
  });

  const [quizList, setQuizList] = useState([]);

  const handleChange = (e) => {
    setQuestionData({
      ...questionData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddQuestion = (e) => {
    e.preventDefault();

    if (
      !questionData.question ||
      !questionData.option1 ||
      !questionData.option2 ||
      !questionData.option3 ||
      !questionData.option4 ||
      !questionData.correctAnswer
    ) {
      alert("Please fill all fields!");
      return;
    }

    setQuizList([...quizList, questionData]);

    setQuestionData({
      question: "",
      option1: "",
      option2: "",
      option3: "",
      option4: "",
      correctAnswer: "",
    });
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Quiz Builder</h2>

        <form onSubmit={handleAddQuestion} style={styles.form}>
          <input
            type="text"
            name="question"
            placeholder="Enter Question"
            value={questionData.question}
            onChange={handleChange}
            style={styles.input}
          />

          <input
            type="text"
            name="option1"
            placeholder="Option 1"
            value={questionData.option1}
            onChange={handleChange}
            style={styles.input}
          />

          <input
            type="text"
            name="option2"
            placeholder="Option 2"
            value={questionData.option2}
            onChange={handleChange}
            style={styles.input}
          />

          <input
            type="text"
            name="option3"
            placeholder="Option 3"
            value={questionData.option3}
            onChange={handleChange}
            style={styles.input}
          />

          <input
            type="text"
            name="option4"
            placeholder="Option 4"
            value={questionData.option4}
            onChange={handleChange}
            style={styles.input}
          />

          <select
            name="correctAnswer"
            value={questionData.correctAnswer}
            onChange={handleChange}
            style={styles.select}
          >
            <option value="">Select Correct Answer</option>
            <option value={questionData.option1}>Option 1</option>
            <option value={questionData.option2}>Option 2</option>
            <option value={questionData.option3}>Option 3</option>
            <option value={questionData.option4}>Option 4</option>
          </select>

          <button type="submit" style={styles.button}>
            Add Question
          </button>
        </form>
      </div>

      {/* Display Added Questions */}
      <div style={styles.listContainer}>
        <h3 style={{ color: "#333" }}>Added Questions</h3>

        {quizList.length === 0 ? (
          <p>No questions added yet.</p>
        ) : (
          quizList.map((quiz, index) => (
            <div key={index} style={styles.questionCard}>
              <h4>
                {index + 1}. {quiz.question}
              </h4>
              <ul>
                <li>{quiz.option1}</li>
                <li>{quiz.option2}</li>
                <li>{quiz.option3}</li>
                <li>{quiz.option4}</li>
              </ul>
              <p style={{ color: "green", fontWeight: "bold" }}>
                Correct: {quiz.correctAnswer}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    padding: "40px",
    background: "linear-gradient(135deg, #43cea2, #185a9d)",
  },
  card: {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "15px",
    maxWidth: "500px",
    margin: "0 auto",
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
    marginBottom: "12px",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  select: {
    marginBottom: "12px",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#185a9d",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
  },
  listContainer: {
    marginTop: "40px",
    maxWidth: "700px",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "15px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
  },
  questionCard: {
    marginBottom: "20px",
    padding: "15px",
    borderRadius: "10px",
    backgroundColor: "#f4f6f8",
  },
};

export default QuizBuilder;