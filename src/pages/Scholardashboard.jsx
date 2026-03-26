import React, { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

/* ADD THIS IMPORT */
import main_logo from "../assets/main_logo.png";

function Scholardashboard() {

  const [collapsed, setCollapsed] = useState(false);

  const navigate = useNavigate();

  const scholar = {
    name: "Tejes J",
    role: "Scholar",
    initials: "TJ"
  };

  return (

    <div className="layout">


      {/* SIDEBAR */}

      <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>

        <div>

          <div className="brand">

            {/* REPLACED S WITH LOGO */}
            <div className="brand-icon">
              <img src={main_logo} alt="Studatrix Logo" />
            </div>

            {!collapsed && (
              <div className="brand-text">
                Studatrix
                <span>Academic Intelligence</span>
              </div>
            )}

          </div>


          <nav className="nav">

            <NavLink to="" end className="nav-item">
              Dashboard
            </NavLink>

            <NavLink to="profile" className="nav-item">
              Profile
            </NavLink>

            <NavLink to="academic-records" className="nav-item">
              Records
            </NavLink>

            <NavLink to="attendance" className="nav-item">
              Attendance
            </NavLink>

            <NavLink to="fee-payments" className="nav-item">
              Fees
            </NavLink>

            <NavLink to="courses" className="nav-item">
              Courses
            </NavLink>

            <NavLink to="assignments" className="nav-item">
              Assignments
            </NavLink>

            <NavLink to="schedule" className="nav-item">
              Schedule
            </NavLink>

            <NavLink to="settings" className="nav-item">
              Settings
            </NavLink>

          </nav>

        </div>



        {/* SIDEBAR BOTTOM */}

        <div className="sidebar-bottom">


          <button
            className="logout-btn"
            onClick={() => navigate("/")}
          >
            ⎋ {!collapsed && "Logout"}
          </button>


          <button
            className="collapse-btn"
            onClick={() => setCollapsed(!collapsed)}
          >
            {collapsed ? "→" : "←"}
          </button>


          {!collapsed && (
            <div className="system-status">
              ● System Online
            </div>
          )}

        </div>

      </aside>



      {/* MAIN */}

      <div className="main">


        <header className="header">

          <div>

            <div className="page-title">
              Scholar Dashboard
            </div>

            <div className="breadcrumb">
              Studatrix • Academic Intelligence Platform
            </div>

          </div>


          <div className="header-right">

            <div className="status">

              <span className="status-dot"></span>

              <span className="status-text">
                System Online
              </span>

            </div>


            <div className="divider"></div>


            <div className="user">

              <div className="avatar">
                {scholar.initials}
              </div>

              {!collapsed && (
                <div className="user-info">

                  <span className="user-name">
                    {scholar.name}
                  </span>

                  <span className="user-role">
                    {scholar.role}
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
          Studatrix © 2026 • Academic Intelligence Platform
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
        background: #f8fafc;
      }

      .sidebar {
        width: 260px;
        background: #0f172a;
        color: white;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        transition: 0.25s;
      }

      .sidebar.collapsed {
        width: 80px;
      }

      .brand {
        display: flex;
        gap: 12px;
        align-items: center;
        margin-bottom: 30px;
      }

      .brand-icon {
        width: 40px;
        height: 40px;
        border-radius: 8px;
        background: white;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
      }

      /* ADD THIS */
      .brand-icon img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }

      .brand-text span {
        display: block;
        font-size: 11px;
        opacity: 0.6;
      }

      .nav {
        display: flex;
        flex-direction: column;
        gap: 6px;
      }

      .nav-item {
        padding: 10px;
        border-radius: 8px;
        text-decoration: none;
        color: white;
        transition: 0.2s;
      }

      .nav-item:hover {
        background: rgba(255,255,255,0.08);
      }

      .nav-item.active {
        background: linear-gradient(90deg,#2563eb,#06b6d4);
      }

      .logout-btn {
        width: 100%;
        padding: 12px;
        background: linear-gradient(135deg,#ef4444,#dc2626);
        border: none;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        cursor: pointer;
        margin-bottom: 10px;
        transition: 0.25s;
      }

      .logout-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 18px rgba(239,68,68,0.3);
      }

      .collapse-btn {
        width: 100%;
        padding: 8px;
        background: #1e293b;
        border: none;
        border-radius: 6px;
        color: white;
        cursor: pointer;
      }

      .system-status {
        margin-top: 10px;
        font-size: 12px;
        opacity: 0.7;
      }

      .main {
        flex: 1;
        display: flex;
        flex-direction: column;
      }

      .header {
        height: 64px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 28px;
        background: rgba(255,255,255,0.75);
        backdrop-filter: blur(10px);
        border-bottom: 1px solid rgba(0,0,0,0.06);
      }

      .page-title {
        font-size: 18px;
        font-weight: 600;
        color: #0f172a;
      }

      .breadcrumb {
        font-size: 12px;
        color: #64748b;
      }

      .header-right {
        display: flex;
        align-items: center;
        gap: 18px;
      }

      .status {
        display: flex;
        align-items: center;
        gap: 6px;
      }

      .status-dot {
        width: 8px;
        height: 8px;
        background: #22c55e;
        border-radius: 50%;
      }

      .status-text {
        font-size: 13px;
        color: #64748b;
      }

      .divider {
        width: 1px;
        height: 28px;
        background: rgba(0,0,0,0.08);
      }

      .user {
        display: flex;
        align-items: center;
        gap: 10px;
      }

      .avatar {
        width: 34px;
        height: 34px;
        border-radius: 8px;
        background: linear-gradient(135deg,#2563eb,#06b6d4);
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 13px;
        font-weight: 600;
      }

      .user-info {
        display: flex;
        flex-direction: column;
      }

      .user-name {
        font-size: 13px;
        font-weight: 500;
      }

      .user-role {
        font-size: 11px;
        color: #64748b;
      }

      .content {
        flex: 1;
        padding: 30px;
      }

      .footer {
        height: 45px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #64748b;
        font-size: 13px;
        border-top: 1px solid rgba(0,0,0,0.06);
      }

      `}</style>


    </div>

  );

}

export default Scholardashboard;