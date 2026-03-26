import React, { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

import main_logo from "../../assets/main_logo.png";

function AdminDashboardLayout() {

  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const admin = {
    name: "System Administrator",
    role: "Administrator",
    initials: "SA"
  };

  const handleLogout = () => {
    localStorage.removeItem("role");
    localStorage.removeItem("currentUser");
    navigate("/"); // ✅ redirect to First.jsx (home route)
  };

  return (

    <div className="layout">

      {/* SIDEBAR */}
      <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>

        <div>

          {/* BRAND */}
          <div className="brand">

            <div className="brand-icon">
              <img src={main_logo} alt="Studatrix Logo" />
            </div>

            {!collapsed && (
              <div className="brand-text">
                Studatrix
                <span>Admin Control Panel</span>
              </div>
            )}

          </div>


          {/* NAVIGATION */}
          <nav className="nav">

            <NavLink to="" end className="nav-item">
              Dashboard
            </NavLink>

            <NavLink to="profile" className="nav-item">
              Profile
            </NavLink>

            <NavLink to="students" className="nav-item">
              Manage Students
            </NavLink>

            <NavLink to="teachers" className="nav-item">
              Manage Teachers
            </NavLink>

            <NavLink to="courses" className="nav-item">
              Courses
            </NavLink>

            <NavLink to="reports" className="nav-item">
              Reports
            </NavLink>

            <NavLink to="settings" className="nav-item">
              Settings
            </NavLink>

          </nav>

        </div>


        {/* BOTTOM BUTTONS */}
        <div className="sidebar-bottom">

          <button className="logout-btn" onClick={handleLogout}>
            ⎋ {!collapsed && "Logout"}
          </button>

          <button
            className="collapse-btn"
            onClick={() => setCollapsed(!collapsed)}
          >
            {collapsed ? "→" : "←"}
          </button>

        </div>

      </aside>



      {/* MAIN */}
      <div className="main">

        <header className="header">

          <div>
            <div className="page-title">
              Admin Dashboard
            </div>

            <div className="breadcrumb">
              Studatrix • System Administration Panel
            </div>
          </div>


          <div className="header-right">

            <div className="status">
              <span className="status-dot"></span>
              System Secure
            </div>

            <div className="divider"></div>


            <div className="user">

              <div className="avatar">
                {admin.initials}
              </div>

              {!collapsed && (
                <div className="user-info">

                  <span className="user-name">
                    {admin.name}
                  </span>

                  <span className="user-role">
                    {admin.role}
                  </span>

                </div>
              )}

            </div>

          </div>

        </header>


        <main className="content">
          <Outlet />
        </main>


        <footer className="footer">
          Studatrix © 2026 • Admin Intelligence Platform
        </footer>

      </div>



      {/* CSS */}
      <style>{`

* {
  box-sizing: border-box;
  font-family: Inter, system-ui;
}

.layout {
  display: flex;
  min-height: 100vh;
  background: linear-gradient(135deg,#e0f2fe,#f0f9ff);
}

.sidebar {
  width: 260px;
  background: linear-gradient(180deg,#1e3a8a,#2563eb);
  color: white;
  padding: 24px 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.3s ease;
  box-shadow: 4px 0 25px rgba(0,0,0,0.1);
}

.sidebar.collapsed {
  width: 80px;
}

.brand {
  display: flex;
  gap: 14px;
  align-items: center;
  margin-bottom: 40px;
}

.brand-icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.brand-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.brand-text {
  font-weight: 600;
  font-size: 16px;
}

.brand-text span {
  display: block;
  font-size: 11px;
  opacity: 0.8;
}

.nav {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.nav-item {
  padding: 12px 15px;
  border-radius: 14px;
  color: white;
  text-decoration: none;
  font-size: 14px;
}

.nav-item.active {
  background: linear-gradient(90deg,#06b6d4,#38bdf8);
}

.logout-btn {
  width: 100%;
  padding: 12px;
  background: linear-gradient(135deg,#ef4444,#dc2626);
  border: none;
  border-radius: 14px;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
}

.logout-btn:hover {
  box-shadow: 0 15px 35px rgba(239,68,68,0.45);
}

.collapse-btn {
  width: 100%;
  padding: 10px;
  background: rgba(255,255,255,0.15);
  border: none;
  border-radius: 12px;
  color: white;
  cursor: pointer;
}

.main {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.header {
  height: 75px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  background: rgba(255,255,255,0.75);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(0,0,0,0.05);
}

.page-title {
  font-size: 22px;
  font-weight: 600;
  color: #1e3a8a;
}

.breadcrumb {
  font-size: 12px;
  color: #64748b;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 22px;
}

.status {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #2563eb;
  font-weight: 500;
}

.status-dot {
  width: 8px;
  height: 8px;
  background: #22c55e;
  border-radius: 50%;
}

.divider {
  width: 1px;
  height: 30px;
  background: rgba(0,0,0,0.1);
}

.user {
  display: flex;
  align-items: center;
  gap: 12px;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 14px;
  background: linear-gradient(135deg,#2563eb,#06b6d4);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
}

.user-info {
  display: flex;
  flex-direction: column;
}

.user-name {
  font-size: 13px;
  font-weight: 600;
}

.user-role {
  font-size: 11px;
  color: #64748b;
}

.content {
  flex: 1;
  padding: 45px;
}

.footer {
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #64748b;
  font-size: 13px;
  border-top: 1px solid rgba(0,0,0,0.05);
  background: rgba(255,255,255,0.65);
}

      `}</style>

    </div>

  );

}

export default AdminDashboardLayout;