import { useState } from "react";
import { signInWithEmail } from "./Firebase";   // ✅ back to your actual export
import { useNavigate } from "react-router-dom";
import "./visual.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmail(email, password);
      console.log("User logged in successfully:", userCredential.user);

      // ✅ route fix — go to home instead of missing /dashboard
      navigate("/");
    } catch (error) {
      console.error("Error logging in:", error.message);
    }
  };

  return (
    <div className="style">
      <h3>Login to Continue</h3>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <br />
        <input
          type="email"
          placeholder="Enter your Email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <br />

        <label>Password:</label>
        <br />
        <input
          type="password"
          placeholder="Enter your Password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <br />

        <button type="submit">Login</button>
        <button type="button" onClick={() => navigate("/signup")}>
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Login;
