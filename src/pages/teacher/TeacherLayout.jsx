import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./teacher.css";

/* IMPORT LOGO */
import main_logo from "../../assets/main_logo.png";

function TeacherLayout() {

  const navigate = useNavigate();

  const [collapsed, setCollapsed] = useState(false);

  const teacher = {
    name: "Dr. Surya Kiran",
    role: "Teacher",
    initials: "SK"
  };

  const handleLogout = () => {
    localStorage.removeItem("role");
    navigate("/"); // ✅ ONLY change
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
                <span>Teacher Panel</span>
              </div>
            )}

          </div>


          {/* NAV */}

          <nav className="nav">

            <NavLink to="/teacher-dashboard" end className="nav-item">
              Dashboard
            </NavLink>

            {/* ✅ ADDED PROFILE LINK */}
            <NavLink to="/teacher-dashboard/profile" className="nav-item">
              Profile
            </NavLink>

            <NavLink to="/teacher-dashboard/students" className="nav-item">
              Students
            </NavLink>

            <NavLink to="/teacher-dashboard/classes" className="nav-item">
              Classes
            </NavLink>

            <NavLink to="/teacher-dashboard/reports" className="nav-item">
              Reports
            </NavLink>

          </nav>

        </div>



        {/* SIDEBAR BOTTOM */}

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


        {/* HEADER */}

        <header className="header">

          <div>

            <div className="page-title">
              Teacher Dashboard
            </div>

            <div className="breadcrumb">
              Studatrix • Academic Intelligence Platform
            </div>

          </div>


          {/* HEADER RIGHT */}

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
                {teacher.initials}
              </div>

              {!collapsed && (
                <div className="user-info">

                  <span className="user-name">
                    {teacher.name}
                  </span>

                  <span className="user-role">
                    {teacher.role}
                  </span>

                </div>
              )}

            </div>

          </div>

        </header>



        {/* CONTENT */}

        <main className="content">
          <Outlet />
        </main>



        {/* FOOTER */}

        <footer className="footer">
          Studatrix © 2026 • Teacher Intelligence Platform
        </footer>


      </div>



      {/* CSS (UNCHANGED) */}

      <style>{`

*{
box-sizing:border-box;
font-family:Inter,system-ui;
}

.layout{
display:flex;
min-height:100vh;
background:#f8fafc;
}

.sidebar{
width:260px;
background:#0f172a;
color:white;
padding:20px;
display:flex;
flex-direction:column;
justify-content:space-between;
transition:.25s;
}

.sidebar.collapsed{
width:80px;
}

.brand{
display:flex;
gap:12px;
align-items:center;
margin-bottom:30px;
}

.brand-icon{
width:40px;
height:40px;
background:white;
border-radius:8px;
display:flex;
align-items:center;
justify-content:center;
overflow:hidden;
}

.brand-icon img{
width:100%;
height:100%;
object-fit:contain;
}

.brand-text span{
display:block;
font-size:11px;
opacity:.6;
}

.nav{
display:flex;
flex-direction:column;
gap:6px;
}

.nav-item{
padding:10px;
border-radius:8px;
text-decoration:none;
color:white;
transition:.2s;
}

.nav-item:hover{
background:rgba(255,255,255,.08);
}

.nav-item.active{
background:linear-gradient(90deg,#2563eb,#06b6d4);
}

.logout-btn{
width:100%;
padding:12px;
background:linear-gradient(135deg,#ef4444,#dc2626);
border:none;
border-radius:8px;
color:white;
cursor:pointer;
margin-bottom:10px;
}

.logout-btn:hover{
box-shadow:0 6px 18px rgba(239,68,68,.3);
}

.collapse-btn{
width:100%;
padding:8px;
background:#1e293b;
border:none;
border-radius:6px;
color:white;
cursor:pointer;
}

.main{
flex:1;
display:flex;
flex-direction:column;
}

.header{
height:64px;
display:flex;
justify-content:space-between;
align-items:center;
padding:0 28px;
background:rgba(255,255,255,.75);
backdrop-filter:blur(10px);
border-bottom:1px solid rgba(0,0,0,.06);
}

.page-title{
font-size:18px;
font-weight:600;
}

.breadcrumb{
font-size:12px;
color:#64748b;
}

.header-right{
display:flex;
align-items:center;
gap:18px;
}

.status{
display:flex;
align-items:center;
gap:6px;
}

.status-dot{
width:8px;
height:8px;
background:#22c55e;
border-radius:50%;
}

.status-text{
font-size:13px;
color:#64748b;
}

.divider{
width:1px;
height:28px;
background:rgba(0,0,0,.08);
}

.user{
display:flex;
align-items:center;
gap:10px;
}

.avatar{
width:34px;
height:34px;
border-radius:8px;
background:linear-gradient(135deg,#2563eb,#06b6d4);
color:white;
display:flex;
align-items:center;
justify-content:center;
font-weight:600;
}

.user-info{
display:flex;
flex-direction:column;
}

.user-name{
font-size:13px;
}

.user-role{
font-size:11px;
color:#64748b;
}

.content{
flex:1;
padding:30px;
}

.footer{
height:45px;
display:flex;
justify-content:center;
align-items:center;
color:#64748b;
font-size:13px;
border-top:1px solid rgba(0,0,0,.06);
}

      `}</style>

    </div>

  );

}

export default TeacherLayout;