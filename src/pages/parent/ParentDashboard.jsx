import React from "react";

function ParentDashboard() {

  const stats = [
    { label: "Total Children", value: "2", icon: "👨‍👧‍👦" },
    { label: "Overall Attendance", value: "92%", icon: "📊" },
    { label: "Pending Fees", value: "₹12,500", icon: "💳" },
    { label: "New Notifications", value: "3", icon: "🔔" }
  ];

  const children = [
    {
      name: "Tejes J",
      class: "B.Tech CSE",
      attendance: "94%",
      cgpa: "9.76",
      status: "Excellent"
    },
    {
      name: "Ananya Reddy",
      class: "B.Tech AI",
      attendance: "89%",
      cgpa: "9.12",
      status: "Good"
    }
  ];

  const notifications = [
    "Fee payment reminder for Semester 2",
    "Attendance dropped below 90% in Mathematics",
    "New assignment uploaded in Data Structures"
  ];

  const activities = [
    "Viewed child attendance report",
    "Checked academic performance",
    "Logged into parent portal",
    "Viewed fee payment details"
  ];

  return (

    <div className="parent-dashboard">

      {/* HEADER */}

      <div className="dashboard-header glass">
        <div>
          <h1>Parent Dashboard</h1>
          <p>Monitor your child's academic performance and activities</p>
        </div>
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



      {/* CHILDREN SECTION */}

      <div className="section-grid">

        <div className="card glass">

          <h2>Your Children</h2>

          {children.map((child, index) => (

            <div key={index} className="child-row">

              <div>
                <div className="child-name">
                  {child.name}
                </div>

                <div className="child-class">
                  {child.class}
                </div>
              </div>

              <div className="child-stats">
                <span>Attendance: {child.attendance}</span>
                <span>CGPA: {child.cgpa}</span>
              </div>

              <div className="status-badge">
                {child.status}
              </div>

            </div>

          ))}

        </div>



        {/* NOTIFICATIONS */}

        <div className="card glass">

          <h2>Notifications</h2>

          {notifications.map((note, index) => (

            <div key={index} className="notification">

              <span className="dot"></span>
              {note}

            </div>

          ))}

        </div>

      </div>



      {/* LOWER SECTION */}

      <div className="section-grid">

        {/* ACTIVITY */}

        <div className="card glass">

          <h2>Recent Activity</h2>

          {activities.map((item, index) => (

            <div key={index} className="activity">
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
              Academic Records
            </button>

            <button className="action-btn">
              Fee Payments
            </button>

            <button className="action-btn">
              Contact School
            </button>

          </div>

        </div>

      </div>



      {/* CSS */}

      <style>{`

.parent-dashboard{
animation:fadeIn .5s ease;
}

/* GLASS */

.glass{
background:rgba(255,255,255,.75);
backdrop-filter:blur(10px);
border-radius:18px;
box-shadow:0 10px 30px rgba(0,0,0,.08);
}

/* HEADER */

.dashboard-header{
padding:25px;
margin-bottom:25px;
}

.dashboard-header h1{
margin-bottom:5px;
color:#1e3a8a;
}

.dashboard-header p{
color:#64748b;
}

/* STATS */

.stats-grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
gap:18px;
margin-bottom:25px;
}

.stat-card{
padding:20px;
display:flex;
gap:15px;
align-items:center;
}

.stat-icon{
font-size:28px;
}

.stat-label{
font-size:13px;
color:#64748b;
}

.stat-value{
font-size:22px;
font-weight:bold;
color:#2563eb;
}

/* GRID */

.section-grid{
display:grid;
grid-template-columns:1fr 1fr;
gap:20px;
margin-bottom:20px;
}

/* CARD */

.card{
padding:20px;
}

.card h2{
margin-bottom:15px;
color:#1e3a8a;
}

/* CHILD */

.child-row{
display:flex;
justify-content:space-between;
align-items:center;
padding:10px 0;
border-bottom:1px solid #eee;
}

.child-name{
font-weight:bold;
}

.child-class{
font-size:12px;
color:#64748b;
}

.child-stats{
display:flex;
flex-direction:column;
font-size:13px;
}

.status-badge{
background:#dcfce7;
color:#22c55e;
padding:4px 10px;
border-radius:10px;
font-size:12px;
}

/* NOTIFICATION */

.notification{
padding:8px 0;
font-size:14px;
}

.dot{
width:8px;
height:8px;
background:#2563eb;
display:inline-block;
border-radius:50%;
margin-right:8px;
}

/* ACTIVITY */

.activity{
padding:8px 0;
font-size:14px;
}

/* ACTION */

.actions{
display:grid;
gap:10px;
}

.action-btn{
padding:10px;
border:none;
border-radius:10px;
background:linear-gradient(135deg,#2563eb,#06b6d4);
color:white;
cursor:pointer;
transition:.25s;
}

.action-btn:hover{
transform:translateY(-2px);
box-shadow:0 8px 20px rgba(37,99,235,.3);
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

export default ParentDashboard;