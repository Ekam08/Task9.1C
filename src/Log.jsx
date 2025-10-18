import React from "react";
import { logoutUser } from "./Firebase";
import { useNavigate } from "react-router-dom";

function Log() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logoutUser();
      alert("You have logged out successfully!");
      navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error);
      alert("Failed to logout: " + error.message);
    }
  };

  return (
    <div className="style">
      <h3>Welcome to DEV@Deakin</h3>
      <p>You are now logged in!</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Log;
