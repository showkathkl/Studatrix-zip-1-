import React from "react";

function ParentProfile() {

  const parent = {
    name: "Mr. Shaik Rahman",
    id: "PRT-20458",
    role: "Parent",
    email: "parent@email.com",
    phone: "+91 9876543210",
    address: "Vijayawada, Andhra Pradesh",
    joined: "2023",
    status: "Active"
  };

  const children = [
    {
      name: "Tejes J",
      program: "B.Tech Computer Science",
      attendance: "96%",
      cgpa: "9.76"
    },
    {
      name: "Ananya Reddy",
      program: "B.Tech Artificial Intelligence",
      attendance: "87%",
      cgpa: "9.12"
    }
  ];

  const stats = [
    { label: "Children", value: "2", icon: "👨‍👧‍👦" },
    { label: "Avg Attendance", value: "91%", icon: "📊" },
    { label: "Notifications", value: "4", icon: "🔔" },
    { label: "Account Status", value: "Active", icon: "✅" }
  ];

  const activities = [
    "Logged into parent dashboard",
    "Viewed attendance report",
    "Checked academic performance",
    "Updated contact information"
  ];

  return (

    <div className="profile-page">


      {/* HERO */}

      <div className="hero glass">

        <div className="avatar-ring">

          <div className="avatar">
            SR
          </div>

        </div>

        <div className="hero-info">

          <h1>{parent.name}</h1>

          <p className="role">
            {parent.role}
          </p>

          <div className="meta">

            <span className="badge id">
              ID: {parent.id}
            </span>

            <span className="badge active">
              ● {parent.status}
            </span>

          </div>

        </div>

        <button className="edit-btn">
          Edit Profile
        </button>

      </div>



      {/* STATS */}

      <div className="stats-grid">

        {stats.map((item, index) => (

          <div key={index} className="stat-card glass">

            <div className="stat-icon">
              {item.icon}
            </div>

            <div>

              <div className="stat-label">
                {item.label}
              </div>

              <div className="stat-value">
                {item.value}
              </div>

            </div>

          </div>

        ))}

      </div>



      {/* INFO GRID */}

      <div className="info-grid">


        {/* CONTACT */}

        <div className="card glass">

          <h2>Contact Information</h2>

          <div className="row">
            <span>Email</span>
            <span>{parent.email}</span>
          </div>

          <div className="row">
            <span>Phone</span>
            <span>{parent.phone}</span>
          </div>

          <div className="row">
            <span>Address</span>
            <span>{parent.address}</span>
          </div>

          <div className="row">
            <span>Joined</span>
            <span>{parent.joined}</span>
          </div>

        </div>



        {/* CHILDREN */}

        <div className="card glass">

          <h2>Children Overview</h2>

          {children.map((child, index) => (

            <div key={index} className="child">

              <div className="child-name">
                {child.name}
              </div>

              <div className="child-info">
                {child.program}
              </div>

              <div className="child-meta">

                <span>
                  Attendance: {child.attendance}
                </span>

                <span>
                  CGPA: {child.cgpa}
                </span>

              </div>

            </div>

          ))}

        </div>


      </div>



      {/* LOWER */}

      <div className="lower-grid">


        {/* ACTIVITY */}

        <div className="card glass">

          <h2>Recent Activity</h2>

          {activities.map((item, index) => (

            <div key={index} className="activity">

              <span className="dot"></span>

              {item}

            </div>

          ))}

        </div>



        {/* QUICK ACTIONS */}

        <div className="card glass">

          <h2>Quick Actions</h2>

          <div className="actions">

            <button className="action-btn">
              View Attendance
            </button>

            <button className="action-btn">
              View Academic Records
            </button>

            <button className="action-btn">
              Update Profile
            </button>

            <button className="action-btn">
              Contact School
            </button>

          </div>

        </div>


      </div>



      {/* CSS */}

      <style>{`

.profile-page{
animation:fadeIn .5s ease;
}

/* GLASS */

.glass{
background:rgba(255,255,255,.75);
backdrop-filter:blur(10px);
border-radius:18px;
box-shadow:0 10px 30px rgba(0,0,0,.08);
}

/* HERO */

.hero{
display:flex;
align-items:center;
gap:20px;
padding:25px;
margin-bottom:20px;
position:relative;
}

.avatar-ring{
padding:3px;
border-radius:50%;
background:linear-gradient(135deg,#2563eb,#06b6d4);
}

.avatar{
width:80px;
height:80px;
background:white;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
font-weight:bold;
font-size:24px;
color:#2563eb;
}

.role{
color:#64748b;
}

.meta{
display:flex;
gap:10px;
margin-top:5px;
}

.badge{
padding:4px 10px;
border-radius:10px;
font-size:12px;
}

.id{
background:#dbeafe;
color:#1e40af;
}

.active{
background:#dcfce7;
color:#166534;
}

.edit-btn{
position:absolute;
right:20px;
top:20px;
padding:10px 15px;
border:none;
border-radius:10px;
background:linear-gradient(135deg,#2563eb,#06b6d4);
color:white;
cursor:pointer;
}

/* STATS */

.stats-grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
gap:15px;
margin-bottom:20px;
}

.stat-card{
padding:15px;
display:flex;
gap:10px;
align-items:center;
}

.stat-icon{
font-size:24px;
}

.stat-label{
font-size:13px;
color:#64748b;
}

.stat-value{
font-size:18px;
font-weight:bold;
color:#2563eb;
}

/* INFO */

.info-grid{
display:grid;
grid-template-columns:1fr 1fr;
gap:20px;
margin-bottom:20px;
}

.card{
padding:20px;
}

.row{
display:flex;
justify-content:space-between;
padding:8px 0;
border-bottom:1px solid #eee;
}

/* CHILD */

.child{
padding:10px 0;
border-bottom:1px solid #eee;
}

.child-name{
font-weight:bold;
color:#1e3a8a;
}

.child-info{
font-size:13px;
color:#64748b;
}

.child-meta{
display:flex;
gap:15px;
font-size:13px;
}

/* LOWER */

.lower-grid{
display:grid;
grid-template-columns:1fr 1fr;
gap:20px;
}

.activity{
padding:8px 0;
}

.dot{
width:8px;
height:8px;
background:#22c55e;
border-radius:50%;
display:inline-block;
margin-right:8px;
}

/* ACTIONS */

.actions{
display:grid;
grid-template-columns:1fr 1fr;
gap:10px;
}

.action-btn{
padding:10px;
border:none;
border-radius:10px;
background:linear-gradient(135deg,#2563eb,#06b6d4);
color:white;
cursor:pointer;
}

/* ANIMATION */

@keyframes fadeIn{
from{opacity:0;transform:translateY(10px)}
to{opacity:1;transform:translateY(0)}
}

      `}</style>

    </div>

  );

}

export default ParentProfile;