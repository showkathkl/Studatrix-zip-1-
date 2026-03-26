import React, { useState } from "react";

function Settings() {

  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (

    <div className="settings-page">


      {/* HEADER */}

      <div className="header">

        <h1>Account Settings</h1>

        <p>Manage your profile, security, and preferences</p>

      </div>



      {/* PROFILE SETTINGS */}

      <div className="card">

        <h2>Profile Information</h2>

        <div className="form-group">

          <label>Full Name</label>
          <input type="text" defaultValue="Tejes J" />

        </div>

        <div className="form-group">

          <label>Email</label>
          <input type="email" defaultValue="jujjavaraputejes@gmail.com" />

        </div>

        <div className="form-group">

          <label>Phone</label>
          <input type="text" defaultValue="+91 78936 23583" />

        </div>

        <button className="save-button">
          Save Changes
        </button>

      </div>



      {/* PASSWORD */}

      <div className="card">

        <h2>Change Password</h2>

        <div className="form-group">

          <label>Current Password</label>
          <input type="password" />

        </div>

        <div className="form-group">

          <label>New Password</label>
          <input type="password" />

        </div>

        <div className="form-group">

          <label>Confirm Password</label>
          <input type="password" />

        </div>

        <button className="save-button">
          Update Password
        </button>

      </div>



      {/* PREFERENCES */}

      <div className="card">

        <h2>Preferences</h2>

        <div className="toggle-row">

          <span>Email Notifications</span>

          <label className="switch">

            <input
              type="checkbox"
              checked={notifications}
              onChange={() => setNotifications(!notifications)}
            />

            <span className="slider"></span>

          </label>

        </div>


        <div className="toggle-row">

          <span>Dark Mode</span>

          <label className="switch">

            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />

            <span className="slider"></span>

          </label>

        </div>

      </div>



      {/* SECURITY */}

      <div className="card security-card">

        <h2>Account Security</h2>

        <p>Status: <span className="secure">Secure</span></p>

        <button className="danger-button">
          Logout from All Devices
        </button>

      </div>



      {/* CSS */}

      <style>

        {`

        .settings-page {

          animation: fadeIn 0.5s ease;

        }


        .header {

          margin-bottom: 25px;

        }


        .header h1 {

          font-size: 32px;

          background: linear-gradient(
            90deg,
            #2563eb,
            #06b6d4
          );

          -webkit-background-clip: text;

          -webkit-text-fill-color: transparent;

        }


        .header p {

          color: #64748b;

        }


        .card {

          background: white;

          padding: 25px;

          border-radius: 16px;

          margin-bottom: 20px;

          box-shadow: 0 10px 25px rgba(0,0,0,0.05);

          transition: 0.3s;

        }


        .card:hover {

          transform: translateY(-5px);

        }


        .form-group {

          display: flex;

          flex-direction: column;

          margin-bottom: 15px;

        }


        label {

          font-size: 14px;

          margin-bottom: 5px;

        }


        input {

          padding: 10px;

          border-radius: 8px;

          border: 1px solid #e5e7eb;

        }


        input:focus {

          outline: none;

          border-color: #2563eb;

        }


        .save-button {

          background: linear-gradient(
            90deg,
            #2563eb,
            #06b6d4
          );

          border: none;

          color: white;

          padding: 10px 20px;

          border-radius: 10px;

          cursor: pointer;

          margin-top: 10px;

        }


        .toggle-row {

          display: flex;

          justify-content: space-between;

          align-items: center;

          margin: 10px 0;

        }


        .switch {

          position: relative;

          display: inline-block;

          width: 50px;

          height: 24px;

        }


        .switch input {

          opacity: 0;

          width: 0;

          height: 0;

        }


        .slider {

          position: absolute;

          cursor: pointer;

          top: 0;

          left: 0;

          right: 0;

          bottom: 0;

          background: #ccc;

          border-radius: 24px;

          transition: 0.3s;

        }


        .slider:before {

          position: absolute;

          content: "";

          height: 18px;

          width: 18px;

          left: 3px;

          bottom: 3px;

          background: white;

          border-radius: 50%;

          transition: 0.3s;

        }


        input:checked + .slider {

          background: #2563eb;

        }


        input:checked + .slider:before {

          transform: translateX(26px);

        }


        .secure {

          color: #22c55e;

          font-weight: 600;

        }


        .danger-button {

          margin-top: 10px;

          background: #ef4444;

          border: none;

          color: white;

          padding: 10px 20px;

          border-radius: 10px;

          cursor: pointer;

        }


        @keyframes fadeIn {

          from {
            opacity: 0;
            transform: translateY(10px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }

        }

        `}

      </style>


    </div>

  );

}

export default Settings;