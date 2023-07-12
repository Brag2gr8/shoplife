import { useState } from "react";
import { auth, firestore } from "../../utils/firebaseUtils"; 
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css"


const SignUp = () => {
  const [formData, setFormData] = useState({
    nickname: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [error, setError] = useState(null);
  const [signingUp, setSigningUp] = useState(false);
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { nickname, email, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      setSigningUp(true);
      setError(null);

      // Create user with email and password
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      
      // Send email verification
      await user.sendEmailVerification();

      // Store nickname in firestore
      await firestore.collection("users").doc(user.uid).set({ nickname });

      // Reset form data
      setFormData({
        nickname: "",
        email: "",
        password: "",
        confirmPassword: ""
      });

      setSigningUp(false);
      window.alert("Sign up successful!"); // Display alert

      // Redirect to Email verified page
      navigate("/login?message=A verification email has been sent. Please check your inbox to complete the registration process.")

      // Replace "/dashboard" with the desired URL
      // history.push("/dashboard");
    } catch (error) {
      setError(error.message);
      setSigningUp(false);
    }
  };

  return (
    <div className="auth-page">
      <h2>Create an account</h2>
      <form 
        onSubmit={handleSubmit}
        className="auth-form"
      >
        <label>
          Nickname *
          <input
            type="text"
            name="nickname"
            value={formData.nickname}
            onChange={handleChange}
            placeholder="Nickname"
            required
          />
        </label>
        <label>
          Email *
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter a valid email address"
          />
        </label>
        <label>
          Password *
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />
        </label>
        <label>
          Confirm Password *
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="confirm your password"
            required
          />
        </label>
        <button
            type="submit"
            disabled={signingUp}
        >
          {signingUp ? "Signing Up..." : "Sign Up"}
        </button>
      </form>
      <p className="below-alternate-signup">
        Have an account? <Link to="/login">Log in</Link>
      </p>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default SignUp;