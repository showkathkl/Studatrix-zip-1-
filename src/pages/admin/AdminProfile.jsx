import React, { useState, useEffect } from "react";

function AdminProfile() {

  const [isEditing, setIsEditing] = useState(false);

  const [admin, setAdmin] = useState({
    name: "System Administrator",
    email: "admin@studatrix.com",
    role: "Administrator",
    department: "System Management",
    joined: "January 2024"
  });

  useEffect(() => {
    const saved = localStorage.getItem("adminProfile");
    if (saved) {
      setAdmin(JSON.parse(saved));
    }
  }, []);

  const handleChange = (e) => {
    setAdmin({
      ...admin,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = () => {
    localStorage.setItem("adminProfile", JSON.stringify(admin));
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div className="admin-profile">

      <div className="profile-header-top">
        <h1>Admin Profile</h1>
        <p>Manage your administrative account details</p>
      </div>

      <div className="profile-card">

        {/* Profile Top Section */}
        <div className="profile-header">
          <div className="avatar">SA</div>
          <div>
            <h2>{admin.name}</h2>
            <span className="role-tag">{admin.role}</span>
          </div>
        </div>

        {/* Details Section */}
        <div className="details-grid">

          {isEditing ? (
            <>
              <InputField label="Name" name="name" value={admin.name} onChange={handleChange} />
              <InputField label="Email" name="email" value={admin.email} onChange={handleChange} />
              <InputField label="Department" name="department" value={admin.department} onChange={handleChange} />
              <InputField label="Joined" name="joined" value={admin.joined} onChange={handleChange} />
            </>
          ) : (
            <>
              <DetailItem label="Email" value={admin.email} />
              <DetailItem label="Department" value={admin.department} />
              <DetailItem label="Joined" value={admin.joined} />
              <DetailItem label="Access Level" value="Full System Access" />
            </>
          )}

        </div>

        {/* Buttons */}
        <div className="btn-group">
          {isEditing ? (
            <>
              <button className="save-btn" onClick={handleSave}>Save Changes</button>
              <button className="cancel-btn" onClick={handleCancel}>Cancel</button>
            </>
          ) : (
            <button className="edit-btn" onClick={() => setIsEditing(true)}>
              Edit Profile
            </button>
          )}
        </div>

      </div>

      <style>{`

      .admin-profile {
        animation: fadeIn 0.3s ease;
      }

      .profile-header-top {
        margin-bottom: 30px;
      }

      .profile-header-top h1 {
        font-size: 28px;
        font-weight: 600;
        color: #1e3a8a;
        margin-bottom: 6px;
      }

      .profile-header-top p {
        font-size: 14px;
        color: #64748b;
      }

      .profile-card {
        padding: 35px;
        border-radius: 22px;
        backdrop-filter: blur(12px);
        background: rgba(255,255,255,0.75);
        box-shadow: 0 15px 40px rgba(0,0,0,0.06);
        transition: 0.3s ease;
      }

      .profile-header {
        display: flex;
        align-items: center;
        gap: 25px;
        margin-bottom: 35px;
      }

      .avatar {
        width: 90px;
        height: 90px;
        border-radius: 20px;
        background: linear-gradient(135deg,#2563eb,#06b6d4);
        color: white;
        font-size: 30px;
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 12px 30px rgba(37,99,235,0.3);
      }

      .role-tag {
        display: inline-block;
        margin-top: 6px;
        font-size: 12px;
        padding: 4px 10px;
        border-radius: 12px;
        background: rgba(37,99,235,0.1);
        color: #2563eb;
        font-weight: 500;
      }

      .details-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit,minmax(230px,1fr));
        gap: 22px;
        margin-bottom: 30px;
      }

      .detail-item {
        background: white;
        padding: 20px;
        border-radius: 16px;
        box-shadow: 0 8px 25px rgba(0,0,0,0.05);
        transition: 0.2s ease;
      }

      .detail-item:hover {
        transform: translateY(-4px);
        box-shadow: 0 12px 30px rgba(0,0,0,0.08);
      }

      .detail-item span {
        display: block;
        font-size: 13px;
        color: #64748b;
        margin-bottom: 8px;
      }

      .detail-item strong {
        font-size: 15px;
        color: #1e3a8a;
      }

      input {
        width: 100%;
        padding: 10px 12px;
        border-radius: 10px;
        border: 1px solid #e5e7eb;
        outline: none;
        font-size: 14px;
        transition: 0.2s;
      }

      input:focus {
        border-color: #2563eb;
        box-shadow: 0 0 0 3px rgba(37,99,235,0.15);
      }

      .btn-group {
        display: flex;
        gap: 12px;
        flex-wrap: wrap;
      }

      .edit-btn, .save-btn {
        padding: 12px 26px;
        border: none;
        border-radius: 14px;
        background: linear-gradient(135deg,#2563eb,#06b6d4);
        color: white;
        font-weight: 500;
        cursor: pointer;
        transition: 0.3s ease;
      }

      .edit-btn:hover, .save-btn:hover {
        transform: translateY(-3px);
        box-shadow: 0 15px 35px rgba(37,99,235,0.4);
      }

      .cancel-btn {
        padding: 12px 26px;
        border: none;
        border-radius: 14px;
        background: #e5e7eb;
        cursor: pointer;
        font-weight: 500;
        transition: 0.2s;
      }

      .cancel-btn:hover {
        background: #d1d5db;
      }

      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(6px); }
        to { opacity: 1; transform: translateY(0); }
      }

      `}</style>
    </div>
  );
}

/* Reusable Components */

function DetailItem({ label, value }) {
  return (
    <div className="detail-item">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function InputField({ label, name, value, onChange }) {
  return (
    <div className="detail-item">
      <span>{label}</span>
      <input name={name} value={value} onChange={onChange} />
    </div>
  );
}

export default AdminProfile;