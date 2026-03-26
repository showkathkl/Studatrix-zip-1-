import React from "react";

function ParentAttendance() {

  const stats = [
    { label: "Average Attendance", value: "91%", icon: "📊" },
    { label: "Best Attendance", value: "Tejes J (96%)", icon: "🏆" },
    { label: "Lowest Attendance", value: "Ananya (87%)", icon: "⚠️" },
    { label: "School Days", value: "182", icon: "📅" }
  ];

  const children = [
    {
      name: "Tejes J",
      class: "B.Tech CSE",
      attendance: 96,
      present: 175,
      absent: 7,
      late: 3
    },
    {
      name: "Ananya Reddy",
      class: "B.Tech AI",
      attendance: 87,
      present: 158,
      absent: 18,
      late: 6
    }
  ];

  return (

    <div className="attendance-page">


      {/* HEADER */}

      <div className="header-card glass">

        <h1>Attendance Overview</h1>

        <p>
          Monitor daily attendance, performance, and trends
        </p>

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



      {/* ATTENDANCE TABLE */}

      <div className="table-card glass">

        <h2>Children Attendance Details</h2>

        <table className="table">

          <thead>

            <tr>
              <th>Name</th>
              <th>Program</th>
              <th>Attendance</th>
              <th>Present</th>
              <th>Absent</th>
              <th>Late</th>
            </tr>

          </thead>

          <tbody>

            {children.map((child, index) => (

              <tr key={index}>

                <td className="name">
                  {child.name}
                </td>

                <td>
                  {child.class}
                </td>

                <td>

                  <div className="progress-wrapper">

                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{ width: `${child.attendance}%` }}
                      ></div>
                    </div>

                    <span className="percentage">
                      {child.attendance}%
                    </span>

                  </div>

                </td>

                <td className="present">
                  {child.present}
                </td>

                <td className="absent">
                  {child.absent}
                </td>

                <td className="late">
                  {child.late}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>



      {/* LOWER GRID */}

      <div className="lower-grid">


        {/* ALERTS */}

        <div className="panel glass">

          <h2>Attendance Alerts</h2>

          <div className="alert good">
            ✔ Tejes J has excellent attendance
          </div>

          <div className="alert warning">
            ⚠ Ananya attendance below 90%
          </div>

          <div className="alert info">
            ℹ School attendance requirement: 85%
          </div>

        </div>



        {/* RECENT ACTIVITY */}

        <div className="panel glass">

          <h2>Recent Attendance Activity</h2>

          <div className="activity">
            ✔ Tejes J marked present today
          </div>

          <div className="activity">
            ✔ Ananya attended Data Structures class
          </div>

          <div className="activity">
            ✔ Attendance updated by system
          </div>

        </div>


      </div>



      {/* CSS */}

      <style>{`

.attendance-page{
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

.header-card{
padding:25px;
margin-bottom:25px;
}

.header-card h1{
color:#1e3a8a;
margin-bottom:5px;
}

.header-card p{
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
font-size:26px;
}

.stat-label{
font-size:13px;
color:#64748b;
}

.stat-value{
font-size:20px;
font-weight:bold;
color:#2563eb;
}

/* TABLE */

.table-card{
padding:20px;
margin-bottom:25px;
}

.table{
width:100%;
border-collapse:collapse;
}

.table th{
padding:12px;
background:#2563eb;
color:white;
text-align:left;
}

.table td{
padding:12px;
border-bottom:1px solid #eee;
}

.name{
font-weight:bold;
color:#1e3a8a;
}

/* PROGRESS BAR */

.progress-wrapper{
display:flex;
align-items:center;
gap:10px;
}

.progress-bar{
width:120px;
height:8px;
background:#e5e7eb;
border-radius:10px;
overflow:hidden;
}

.progress-fill{
height:100%;
background:linear-gradient(90deg,#2563eb,#06b6d4);
}

.percentage{
font-size:13px;
font-weight:bold;
}

/* COLORS */

.present{
color:#16a34a;
font-weight:bold;
}

.absent{
color:#dc2626;
font-weight:bold;
}

.late{
color:#ea580c;
font-weight:bold;
}

/* LOWER */

.lower-grid{
display:grid;
grid-template-columns:1fr 1fr;
gap:20px;
}

.panel{
padding:20px;
}

.alert{
padding:10px;
border-radius:10px;
margin-bottom:10px;
}

.alert.good{
background:#dcfce7;
color:#166534;
}

.alert.warning{
background:#fef3c7;
color:#92400e;
}

.alert.info{
background:#dbeafe;
color:#1e40af;
}

.activity{
padding:8px 0;
color:#374151;
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

export default ParentAttendance;