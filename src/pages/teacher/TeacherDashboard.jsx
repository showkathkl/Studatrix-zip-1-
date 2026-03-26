import React from "react";

function TeacherDashboard() {

  const stats = [
    { label: "Total Students", value: "120" },
    { label: "Active Classes", value: "5" },
    { label: "Pending Reports", value: "8" },
    { label: "Assignments to Review", value: "14" }
  ];

  const activities = [
    "Uploaded new assignment for Data Structures",
    "Marked attendance for AI Class",
    "Reviewed student submissions",
    "Updated course material",
    "Generated academic performance report"
  ];

  const schedule = [
    { subject: "Data Structures", time: "09:00 AM", room: "Room 301" },
    { subject: "Artificial Intelligence", time: "11:00 AM", room: "Room 205" },
    { subject: "Machine Learning", time: "02:00 PM", room: "Room 410" }
  ];

  return (

    <div className="teacher-page">

      {/* HEADER */}

      <div className="page-header glass">

        <div>
          <h1>Teacher Dashboard</h1>
          <p>Overview of your classes, students, and academic activity</p>
        </div>

        <div className="status">
          <span className="dot"></span>
          System Active
        </div>

      </div>



      {/* STATS */}

      <div className="card-grid">

        {stats.map((item, index) => (

          <div key={index} className="card glass">

            <span className="card-label">
              {item.label}
            </span>

            <span className="card-value">
              {item.value}
            </span>

          </div>

        ))}

      </div>



      {/* LOWER GRID */}

      <div className="lower-grid">

        {/* RECENT ACTIVITY */}

        <div className="panel glass">

          <h2>Recent Activity</h2>

          {activities.map((item, index) => (
            <div key={index} className="list-item">
              <span className="activity-dot"></span>
              {item}
            </div>
          ))}

        </div>



        {/* TODAY'S SCHEDULE */}

        <div className="panel glass">

          <h2>Today's Schedule</h2>

          {schedule.map((item, index) => (

            <div key={index} className="schedule-item">

              <div>
                <strong>{item.subject}</strong>
                <div className="room">
                  {item.room}
                </div>
              </div>

              <div className="time">
                {item.time}
              </div>

            </div>

          ))}

        </div>

      </div>



      {/* QUICK ACTIONS */}

      <div className="panel glass">

        <h2>Quick Actions</h2>

        <div className="actions">

          <button className="action-btn">
            Create Assignment
          </button>

          <button className="action-btn">
            Mark Attendance
          </button>

          <button className="action-btn">
            Upload Course Material
          </button>

          <button className="action-btn">
            Generate Reports
          </button>

        </div>

      </div>



      {/* CSS */}

      <style>{`

.teacher-page{
animation:fadeIn 0.4s ease;
}

/* GLASS */

.glass{
background:rgba(255,255,255,0.85);
backdrop-filter:blur(12px);
border-radius:18px;
box-shadow:0 10px 30px rgba(0,0,0,0.08);
}

/* HEADER */

.page-header{
display:flex;
justify-content:space-between;
align-items:center;
padding:25px;
margin-bottom:20px;
}

.page-header h1{
margin:0;
color:#1e3a8a;
}

.page-header p{
color:#64748b;
font-size:14px;
}

.status{
display:flex;
align-items:center;
gap:8px;
font-weight:500;
color:#22c55e;
}

.dot{
width:8px;
height:8px;
background:#22c55e;
border-radius:50%;
}

/* CARDS */

.card-grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
gap:18px;
margin-bottom:20px;
}

.card{
padding:20px;
display:flex;
flex-direction:column;
}

.card-label{
color:#64748b;
font-size:14px;
}

.card-value{
font-size:28px;
font-weight:700;
color:#2563eb;
margin-top:5px;
}

/* LOWER GRID */

.lower-grid{
display:grid;
grid-template-columns:1fr 1fr;
gap:20px;
margin-bottom:20px;
}

/* PANEL */

.panel{
padding:22px;
}

.panel h2{
margin-bottom:15px;
color:#1e3a8a;
}

/* ACTIVITY */

.list-item{
padding:8px 0;
display:flex;
align-items:center;
gap:10px;
color:#334155;
}

.activity-dot{
width:6px;
height:6px;
background:#2563eb;
border-radius:50%;
}

/* SCHEDULE */

.schedule-item{
display:flex;
justify-content:space-between;
padding:10px 0;
border-bottom:1px solid rgba(0,0,0,0.05);
}

.room{
font-size:12px;
color:#64748b;
}

.time{
color:#2563eb;
font-weight:600;
}

/* ACTIONS */

.actions{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
gap:12px;
}

.action-btn{
padding:12px;
border:none;
border-radius:10px;
background:linear-gradient(135deg,#2563eb,#06b6d4);
color:white;
font-weight:600;
cursor:pointer;
transition:0.2s;
}

.action-btn:hover{
transform:translateY(-2px);
box-shadow:0 8px 20px rgba(37,99,235,0.3);
}

/* ANIMATION */

@keyframes fadeIn{
from{
opacity:0;
transform:translateY(10px);
}
to{
opacity:1;
transform:translateY(0);
}
}

      `}</style>

    </div>

  );

}

export default TeacherDashboard;