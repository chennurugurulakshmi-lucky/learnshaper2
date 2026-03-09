import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

function Enroll() {
  const { courseName } = useParams();
  const navigate = useNavigate();

  const [studentName, setStudentName] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("UPI");
  const [upiId, setUpiId] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const coursePrice = 999; // You can later make dynamic

  const handleConfirm = () => {
    if (!studentName) {
      alert("Please enter student name");
      return;
    }

    if (paymentMethod === "UPI" && !upiId) {
      alert("Please enter UPI ID");
      return;
    }

    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div style={styles.container}>
        <h2 style={{ color: "green" }}>🎉 Enrollment Successful!</h2>
        <p><strong>Student:</strong> {studentName}</p>
        <p><strong>Course:</strong> {courseName}</p>
        <p><strong>Amount Paid:</strong> ₹{coursePrice}</p>
        <p><strong>Payment Method:</strong> {paymentMethod}</p>

        <button style={styles.button} onClick={() => navigate("/")}>
          Go to Home
        </button>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h2>Enroll in {courseName}</h2>

      <div style={styles.form}>
        <input
          type="text"
          placeholder="Enter Student Name"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          style={styles.input}
        />

        <input
          type="text"
          value={courseName}
          disabled
          style={styles.input}
        />

        <input
          type="text"
          value={`₹${coursePrice}`}
          disabled
          style={styles.input}
        />

        <select
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          style={styles.input}
        >
          <option value="UPI">UPI</option>
          <option value="Paytm">Paytm</option>
          <option value="GPay">Google Pay</option>
        </select>

        {paymentMethod === "UPI" && (
          <input
            type="text"
            placeholder="Enter UPI ID"
            value={upiId}
            onChange={(e) => setUpiId(e.target.value)}
            style={styles.input}
          />
        )}

        <button style={styles.button} onClick={handleConfirm}>
          Confirm Payment
        </button>

        <button
          style={{ ...styles.button, backgroundColor: "gray" }}
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
    textAlign: "center",
  },
  form: {
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    maxWidth: "400px",
    marginInline: "auto",
  },
  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#4e73df",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default Enroll;
