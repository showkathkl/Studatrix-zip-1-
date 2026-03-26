import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

/* IMPORT YOUR LOGO */
import main_logo from "../assets/main_logo.png";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {

    const storedUsers =
      JSON.parse(localStorage.getItem("users")) || [];

    const user = storedUsers.find(
      (u) =>
        u.email === email &&
        u.password === password
    );

    if (!user) {
      setError("Invalid email or password");
      return;
    }

    setError("");

    const role = user.role.toLowerCase();

    localStorage.setItem("role", role);
    localStorage.setItem("currentUser", JSON.stringify({
      ...user,
      role: role
    }));

    switch (role) {

      case "admin":
        navigate("/admin-dashboard");
        break;

      case "scholar":
        navigate("/scholar-dashboard");
        break;

      case "teacher":
        navigate("/teacher-dashboard");
        break;

      case "parent":
        navigate("/parent-dashboard");
        break;

      case "doctor":
        navigate("/doctor-dashboard");
        break;

      case "patient":
        navigate("/patient-dashboard");
        break;

      default:
        navigate("/");
    }

  };

  return (

    <div className="login-page">

      <div className="login-card">

        <div className="brand">

          {/* REPLACED S WITH YOUR LOGO */}
          <div className="logo">
            <img src={main_logo} alt="Studatrix Logo" />
          </div>

          <h1>Studatrix</h1>
          <span>Academic Intelligence Platform</span>

        </div>

        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input"
        />

        {error && (
          <div className="error">
            {error}
          </div>
        )}

        <button
          className="login-btn"
          onClick={handleLogin}
        >
          Login
        </button>

      </div>

      <style>{`

      .login-page {
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(135deg,#2563eb,#06b6d4);
      }

      .login-card {
        width: 380px;
        padding: 40px;
        border-radius: 16px;
        background: rgba(255,255,255,0.9);
        backdrop-filter: blur(12px);
        box-shadow: 0 20px 50px rgba(0,0,0,0.2);
        text-align: center;
      }

      /* LOGO CONTAINER */
      .logo {
        width: 60px;
        height: 60px;
        border-radius: 12px;
        background: white;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: auto;
        margin-bottom: 10px;
        overflow: hidden;
      }

      .logo img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }

      .input {
        width: 100%;
        padding: 12px;
        margin-bottom: 15px;
        border-radius: 8px;
        border: 1px solid #e5e7eb;
        font-size: 14px;
      }

      .input:focus {
        border-color: #2563eb;
        box-shadow: 0 0 0 3px rgba(37,99,235,0.15);
        outline: none;
      }

      .login-btn {
        width: 100%;
        padding: 12px;
        border-radius: 8px;
        border: none;
        background: linear-gradient(135deg,#2563eb,#06b6d4);
        color: white;
        font-weight: 600;
        cursor: pointer;
      }

      .login-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 20px rgba(37,99,235,0.3);
      }

      .error {
        color: #ef4444;
        margin-bottom: 10px;
        font-size: 13px;
      }

      `}</style>

    </div>

  );

}

export default Login;