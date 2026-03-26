import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

/* ADD LOGO IMPORT */
import main_logo from "../assets/main_logo.png";

function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "scholar"
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRegister = () => {

    const existingUsers =
      JSON.parse(localStorage.getItem("users")) || [];

    const userExists =
      existingUsers.find(
        u => u.email === formData.email
      );

    if (userExists) {
      setError("User already exists");
      return;
    }

    existingUsers.push(formData);

    localStorage.setItem(
      "users",
      JSON.stringify(existingUsers)
    );

    navigate("/login");
  };

  return (

    <div className="register-page">

      <div className="register-card">

        {/* LOGO ADDED */}
        <div className="logo-container">
          <img src={main_logo} alt="Studatrix Logo" />
        </div>

        <h1>Create Account</h1>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          className="input"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="input"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="input"
        />

        <select
          name="role"
          onChange={handleChange}
          className="input"
        >
          <option value="scholar">Scholar</option>
          <option value="admin">Admin</option>
          <option value="teacher">Teacher</option>
          <option value="parent">Parent</option>
        </select>

        {error && (
          <div className="error">
            {error}
          </div>
        )}

        <button
          className="register-btn"
          onClick={handleRegister}
        >
          Register
        </button>

      </div>

      <style>{`

      .register-page {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background: linear-gradient(135deg,#2563eb,#06b6d4);
      }

      .register-card {

        width: 400px;

        padding: 40px;

        background: rgba(255,255,255,0.92);

        backdrop-filter: blur(14px);

        border-radius: 18px;

        text-align: center;

        box-shadow: 0 25px 60px rgba(0,0,0,0.25);

        animation: fadeIn 0.4s ease;

      }

      /* LOGO */

      .logo-container {

        width: 70px;
        height: 70px;

        margin: 0 auto 15px auto;

        border-radius: 16px;

        background: white;

        padding: 8px;

        box-shadow: 0 8px 25px rgba(0,0,0,0.15);

        display: flex;
        align-items: center;
        justify-content: center;

      }

      .logo-container img {

        width: 100%;
        height: 100%;

        object-fit: contain;

      }

      h1 {
        margin-bottom: 20px;
        color: #0f172a;
      }

      .input {

        width: 100%;

        padding: 12px;

        margin-bottom: 15px;

        border-radius: 10px;

        border: 1px solid #e5e7eb;

        font-size: 14px;

        transition: 0.2s;

      }

      .input:focus {

        outline: none;

        border-color: #2563eb;

        box-shadow: 0 0 0 3px rgba(37,99,235,0.15);

      }

      .register-btn {

        width: 100%;

        padding: 12px;

        background: linear-gradient(135deg,#2563eb,#06b6d4);

        border: none;

        color: white;

        border-radius: 10px;

        cursor: pointer;

        font-weight: 600;

        transition: 0.25s;

      }

      .register-btn:hover {

        transform: translateY(-2px);

        box-shadow: 0 12px 25px rgba(37,99,235,0.35);

      }

      .error {

        color: #ef4444;

        margin-bottom: 10px;

        font-size: 13px;

      }

      @keyframes fadeIn {

        from {
          opacity: 0;
          transform: translateY(15px);
        }

        to {
          opacity: 1;
          transform: translateY(0);
        }

      }

      `}</style>

    </div>
  );
}

export default Register;