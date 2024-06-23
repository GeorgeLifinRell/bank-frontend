import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { SERVER_URL } from "../utils/utils";
import "../styles/styles.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Logging in with:", { email, password });
    const errorEl = document.getElementById("error-message");
    try {
      const requestBody = {
        username: email,
        password: password,
      };
      const response = await fetch(`${SERVER_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });
      if (!response.ok) {
        errorEl.textContent = "Invalid login credentials";
        errorEl.style = { color: "#ff0000" };
      }
      const data = await response.json();
      Cookies.set("token", data.token);
      navigate("/home");
    } catch (error) {
      console.error(error);
    }
    // navigate("/home");
  };

  return (
    <div>
      <h2>Login</h2>
      <p id="error-message"></p>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" onClick={handleSubmit}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
