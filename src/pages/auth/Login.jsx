import { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { auth } from "../../utils/firebaseUtils";
import "./Auth.css"

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const message = queryParams.get('message');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      await auth.signInWithEmailAndPassword(email, password);
      const user = auth.currentUser;

      if (user && !user.emailVerified) {
        setError("Verify your email before logging in");
        await auth.signOut();
        setLoading(false);
        return; // Stop further execution
      }

      setLoading(false);
      alert("Successfully logged in");
      navigate("/");
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <section className="auth-page">
      <h2>Login</h2>
      {message && <p className="success">{message}</p>}
      <form onSubmit={handleLogin} className="auth-form">
        <label>
          Email *
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter a valid email address"
          />
        </label>
        <label>
          Password *
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </label>
        <button
          type="submit"
          disabled={loading}
        >
          {loading ? "logging in" : "Login"}
        </button>
      </form>
      {error && <p className="error">{error}</p>}
      <p className="below-alternate-signup">
        Or create an account <Link to="/signup">Here</Link>
      </p>
    </section>
  );
}

export default Login