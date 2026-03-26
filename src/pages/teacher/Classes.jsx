import React, { useState } from "react";

function Classes() {

  const classes = [
    {
      name: "Data Structures",
      code: "CS201",
      students: 42,
      schedule: "Mon, Wed • 10:00 AM",
      status: "Active"
    },
    {
      name: "Operating Systems",
      code: "CS301",
      students: 38,
      schedule: "Tue, Thu • 11:30 AM",
      status: "Active"
    },
    {
      name: "Frontend Development",
      code: "CS405",
      students: 35,
      schedule: "Mon, Fri • 2:00 PM",
      status: "Active"
    },
    {
      name: "Database Management",
      code: "CS302",
      students: 29,
      schedule: "Wed • 3:30 PM",
      status: "Inactive"
    }
  ];

  const activities = [
    "Attendance marked for Data Structures",
    "New assignment added in OS",
    "Frontend Development class completed",
    "Database quiz scheduled"
  ];

  const todaySchedule = [
    { name: "Data Structures", time: "10:00 AM" },
    { name: "Frontend Development", time: "2:00 PM" }
  ];

  const [search, setSearch] = useState("");

  const filteredClasses = classes.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  const stats = [
    { label: "Total Classes", value: "8" },
    { label: "Active Classes", value: "6" },
    { label: "Students Enrolled", value: "268" },
    { label: "Departments", value: "3" }
  ];

  return (

    <div className="classes-page">

      {/* HEADER */}

      <div className="header">

        <div>
          <h1>Classes</h1>
          <p>Manage and monitor your classes efficiently</p>
        </div>

        <input
          type="text"
          placeholder="Search classes..."
          className="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>


      {/* STATS */}

      <div className="stats-grid">

        {stats.map((item, index) => (

          <div key={index} className="stat-card">

            <span className="stat-label">
              {item.label}
            </span>

            <span className="stat-value">
              {item.value}
            </span>

          </div>

        ))}

      </div>


      {/* CLASSES */}

      <div className="classes-grid">

        {filteredClasses.map((cls, index) => (

          <div key={index} className="class-card">

            <div className="class-header">

              <div className="class-title">
                {cls.name}
              </div>

              <div className={`status ${cls.status}`}>
                ● {cls.status}
              </div>

            </div>

            <div className="class-code">
              {cls.code}
            </div>

            <div className="class-info">

              <div>👥 {cls.students} Students</div>
              <div>🕒 {cls.schedule}</div>

            </div>

            <button className="view-btn">
              View Class
            </button>

          </div>

        ))}

      </div>


      {/* LOWER GRID (FILLS EMPTY SPACE) */}

      <div className="lower-grid">


        {/* TODAY SCHEDULE */}

        <div className="panel">

          <h3>Today's Schedule</h3>

          {todaySchedule.map((item, index) => (
            <div key={index} className="list-item">
              🕒 {item.name} — {item.time}
            </div>
          ))}

        </div>


        {/* RECENT ACTIVITY */}

        <div className="panel">

          <h3>Recent Activity</h3>

          {activities.map((item, index) => (
            <div key={index} className="list-item">
              ● {item}
            </div>
          ))}

        </div>


      </div>


      {/* PERFORMANCE */}

      <div className="panel full">

        <h3>Class Performance Overview</h3>

        <div className="performance-grid">

          <div className="performance-card">
            Average Attendance
            <strong>93%</strong>
          </div>

          <div className="performance-card">
            Assignment Completion
            <strong>88%</strong>
          </div>

          <div className="performance-card">
            Student Engagement
            <strong>91%</strong>
          </div>

        </div>

      </div>


      {/* CSS */}

      <style>{`

.classes-page{
animation:fadeIn .4s ease;
}


/* HEADER */

.header{
display:flex;
justify-content:space-between;
align-items:center;
margin-bottom:25px;
}

.header h1{
margin:0;
font-size:26px;
color:#0f172a;
}

.header p{
margin-top:4px;
font-size:14px;
color:#64748b;
}


/* SEARCH */

.search{
width:260px;
padding:10px;
border-radius:8px;
border:1px solid #e2e8f0;
}


/* STATS */

.stats-grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
gap:16px;
margin-bottom:25px;
}

.stat-card{
background:white;
border-radius:12px;
padding:18px;
box-shadow:0 4px 14px rgba(0,0,0,.06);
}

.stat-label{
font-size:13px;
color:#64748b;
}

.stat-value{
font-size:24px;
font-weight:600;
color:#2563eb;
}


/* CLASSES */

.classes-grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
gap:16px;
margin-bottom:25px;
}

.class-card{
background:white;
border-radius:12px;
padding:18px;
box-shadow:0 4px 14px rgba(0,0,0,.06);
transition:.25s;
}

.class-card:hover{
transform:translateY(-4px);
}

.class-title{
font-weight:600;
}

.class-code{
font-size:13px;
color:#64748b;
margin-bottom:8px;
}

.class-info{
font-size:13px;
margin-bottom:10px;
}

.status.Active{
color:#22c55e;
font-size:12px;
}

.status.Inactive{
color:#ef4444;
font-size:12px;
}

.view-btn{
width:100%;
padding:10px;
border:none;
border-radius:8px;
background:linear-gradient(135deg,#2563eb,#06b6d4);
color:white;
cursor:pointer;
}


/* LOWER */

.lower-grid{
display:grid;
grid-template-columns:1fr 1fr;
gap:16px;
margin-bottom:25px;
}

.panel{
background:white;
padding:18px;
border-radius:12px;
box-shadow:0 4px 14px rgba(0,0,0,.06);
}

.panel.full{
margin-bottom:20px;
}

.list-item{
padding:6px 0;
font-size:14px;
color:#334155;
}


/* PERFORMANCE */

.performance-grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
gap:16px;
margin-top:10px;
}

.performance-card{
background:#f1f5f9;
padding:16px;
border-radius:10px;
display:flex;
flex-direction:column;
}

.performance-card strong{
font-size:22px;
color:#2563eb;
}


/* ANIMATION */

@keyframes fadeIn{
from{opacity:0;transform:translateY(10px);}
to{opacity:1;transform:translateY(0);}
}

      `}</style>

    </div>

  );

}

export default Classes;