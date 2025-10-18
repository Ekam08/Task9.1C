import "./visual.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmail } from "./Firebase";

function Signup() {
  // ✅ Proper hook declarations
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  // ✅ Clean input handlers
  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) =>
    setConfirmPassword(e.target.value);

  // ✅ Handle form submit
  const handleCreation = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const userCredential = await createUserWithEmail(email, password, name);
      console.log("User created successfully:", userCredential.user);

      // ✅ navigate safely after signup
      navigate("/login");
    } catch (error) {
      console.error("Error creating account:", error);
      alert("Error creating account: " + error.message);
    }
  };

  return (
    <div className="style">
      <h3>Create a DEV@Deakin Account</h3>

      <form onSubmit={handleCreation}>
        <label>Name:</label>
        <br />
        <input
          type="text"
          placeholder="Enter your Name"
          value={name}
          onChange={handleNameChange}
          required
        />
        <br />

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

        <label>Confirm Password:</label>
        <br />
        <input
          type="password"
          placeholder="Confirm your Password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          required
        />
        <br />

        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default Signup;
