import React, { useState } from "react";

function Students() {

  const students = [
    { name: "Tejes J", program: "B.Tech CSE", status: "Active" },
    { name: "Rahul K", program: "B.Tech CSE", status: "Active" },
    { name: "Aman S", program: "B.Tech AI", status: "Inactive" },
    { name: "Priya R", program: "B.Tech Data Science", status: "Active" },
    { name: "Kiran P", program: "B.Tech Cyber Security", status: "Active" }
  ];

  const [search, setSearch] = useState("");

  const filteredStudents = students.filter(s =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  const stats = [
    { label: "Total Students", value: 132 },
    { label: "Active", value: students.filter(s => s.status === "Active").length },
    { label: "Inactive", value: students.filter(s => s.status === "Inactive").length },
    { label: "Programs", value: "5" }
  ];

  return (

    <div className="students-page">

      {/* HEADER */}

      <div className="header glass">

        <div>
          <h1>Students</h1>
          <p>Manage and monitor all student records</p>
        </div>

        <input
          type="text"
          placeholder="Search students..."
          className="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>


      {/* STATS */}

      <div className="stats-grid">

        {stats.map((item, index) => (

          <div key={index} className="stat-card glass">

            <span className="stat-label">
              {item.label}
            </span>

            <span className="stat-value">
              {item.value}
            </span>

          </div>

        ))}

      </div>



      {/* STUDENTS GRID */}

      <div className="grid">

        {filteredStudents.map((student, index) => (

          <div key={index} className="card glass">

            <div className="avatar">
              {student.name.charAt(0)}
            </div>

            <div className="info">

              <h3>{student.name}</h3>

              <p>{student.program}</p>

              <span className={`status ${student.status}`}>
                ● {student.status}
              </span>

            </div>

            <button className="view-btn">
              View
            </button>

          </div>

        ))}

      </div>



      {/* QUICK ACTIONS */}

      <div className="panel glass">

        <h2>Quick Actions</h2>

        <div className="actions">

          <button className="action-btn">
            Add Student
          </button>

          <button className="action-btn">
            Export Records
          </button>

          <button className="action-btn">
            Generate Report
          </button>

        </div>

      </div>



      {/* CSS */}

      <style>{`

.students-page{
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

.header{
display:flex;
justify-content:space-between;
align-items:center;
padding:20px;
margin-bottom:20px;
}

.header h1{
margin:0;
color:#1e3a8a;
}

.header p{
color:#64748b;
font-size:14px;
}

/* SEARCH */

.search{
padding:10px 14px;
border-radius:10px;
border:1px solid #e5e7eb;
}

/* STATS */

.stats-grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
gap:15px;
margin-bottom:20px;
}

.stat-card{
padding:18px;
display:flex;
flex-direction:column;
}

.stat-label{
color:#64748b;
font-size:13px;
}

.stat-value{
font-size:24px;
font-weight:bold;
color:#2563eb;
}

/* STUDENTS */

.grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
gap:18px;
margin-bottom:20px;
}

.card{
padding:18px;
display:flex;
align-items:center;
gap:15px;
transition:0.25s;
}

.card:hover{
transform:translateY(-5px);
}

/* AVATAR */

.avatar{
width:45px;
height:45px;
border-radius:12px;
background:linear-gradient(135deg,#2563eb,#06b6d4);
color:white;
display:flex;
align-items:center;
justify-content:center;
font-weight:bold;
}

/* INFO */

.info h3{
margin:0;
font-size:15px;
}

.info p{
margin:2px 0;
font-size:13px;
color:#64748b;
}

.status{
font-size:12px;
font-weight:600;
}

.status.Active{
color:#22c55e;
}

.status.Inactive{
color:#ef4444;
}

/* BUTTON */

.view-btn{
margin-left:auto;
padding:8px 14px;
border:none;
border-radius:8px;
background:linear-gradient(135deg,#2563eb,#06b6d4);
color:white;
cursor:pointer;
}

/* PANEL */

.panel{
padding:20px;
}

.panel h2{
margin-bottom:15px;
color:#1e3a8a;
}

/* ACTIONS */

.actions{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(180px,1fr));
gap:10px;
}

.action-btn{
padding:12px;
border:none;
border-radius:10px;
background:linear-gradient(135deg,#2563eb,#06b6d4);
color:white;
cursor:pointer;
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

export default Students;