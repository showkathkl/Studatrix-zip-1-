import React, { useState } from "react";

function AdminSettings() {

  const [settings, setSettings] = useState({
    systemName: "Studatrix",
    adminEmail: "admin@studatrix.com",
    notifications: true,
    maintenanceMode: false
  });

  const handleChange = (e) => {
    setSettings({
      ...settings,
      [e.target.name]: e.target.value
    });
  };

  const handleToggle = (name) => {
    setSettings({
      ...settings,
      [name]: !settings[name]
    });
  };

  const handleSave = () => {
    localStorage.setItem("adminSettings", JSON.stringify(settings));
    alert("Settings saved successfully!");
  };

  return (
    <div className="admin-settings">

      <h1 className="page-title">
        Admin Settings
      </h1>

      <div className="settings-card glass">

        {/* SYSTEM CONFIG */}
        <h2>System Configuration</h2>

        <div className="form-group">
          <label>System Name</label>
          <input
            name="systemName"
            value={settings.systemName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Admin Email</label>
          <input
            name="adminEmail"
            value={settings.adminEmail}
            onChange={handleChange}
          />
        </div>

        <button
          className="primary-btn"
          onClick={handleSave}
        >
          Save Configuration
        </button>

      </div>

      {/* PREFERENCES */}
      <div className="settings-card glass">

        <h2>Preferences</h2>

        <div className="toggle-row">
          <span>Email Notifications</span>
          <label className="switch">
            <input
              type="checkbox"
              checked={settings.notifications}
              onChange={() => handleToggle("notifications")}
            />
            <span className="slider"></span>
          </label>
        </div>

        <div className="toggle-row">
          <span>Maintenance Mode</span>
          <label className="switch">
            <input
              type="checkbox"
              checked={settings.maintenanceMode}
              onChange={() => handleToggle("maintenanceMode")}
            />
            <span className="slider"></span>
          </label>
        </div>

        <button
          className="primary-btn"
          onClick={handleSave}
        >
          Save Preferences
        </button>

      </div>

      <style>{`

      .admin-settings {
        animation: fadeIn 0.4s ease;
      }

      .page-title {
        font-size: 26px;
        font-weight: 600;
        margin-bottom: 30px;
        color: #1e3a8a;
      }

      .settings-card {
        padding: 25px;
        border-radius: 18px;
        backdrop-filter: blur(10px);
        background: rgba(255,255,255,0.75);
        box-shadow: 0 10px 25px rgba(0,0,0,0.05);
        margin-bottom: 25px;
      }

      .settings-card h2 {
        margin-bottom: 20px;
        color: #2563eb;
      }

      .form-group {
        display: flex;
        flex-direction: column;
        margin-bottom: 15px;
      }

      label {
        font-size: 14px;
        margin-bottom: 5px;
        color: #64748b;
      }

      input {
        padding: 10px;
        border-radius: 8px;
        border: 1px solid #e5e7eb;
        outline: none;
      }

      input:focus {
        border-color: #2563eb;
        box-shadow: 0 0 0 3px rgba(37,99,235,0.15);
      }

      .primary-btn {
        padding: 10px 20px;
        border-radius: 8px;
        border: none;
        background: linear-gradient(135deg,#2563eb,#06b6d4);
        color: white;
        cursor: pointer;
        margin-top: 10px;
      }

      .toggle-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;
      }

      /* Toggle Switch */
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
        inset: 0;
        background: #ccc;
        border-radius: 24px;
        transition: .3s;
      }

      .slider:before {
        content: "";
        position: absolute;
        height: 18px;
        width: 18px;
        left: 3px;
        bottom: 3px;
        background: white;
        border-radius: 50%;
        transition: .3s;
      }

      input:checked + .slider {
        background: #2563eb;
      }

      input:checked + .slider:before {
        transform: translateX(26px);
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

      `}</style>

    </div>
  );
}

export default AdminSettings;