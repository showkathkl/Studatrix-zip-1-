import React from "react";

function Children() {

  const children = [
    {
      name: "Tejes J",
      class: "B.Tech Computer Science",
      attendance: "94%",
      cgpa: "9.76",
      status: "Excellent",
      lastActivity: "Submitted assignment"
    },
    {
      name: "Ananya Reddy",
      class: "B.Tech Artificial Intelligence",
      attendance: "89%",
      cgpa: "9.12",
      status: "Good",
      lastActivity: "Viewed lecture notes"
    }
  ];

  const stats = [
    { label: "Total Children", value: "2", icon: "👨‍👧‍👦" },
    { label: "Average CGPA", value: "9.44", icon: "🎓" },
    { label: "Average Attendance", value: "91%", icon: "📊" },
    { label: "Active Courses", value: "12", icon: "📚" }
  ];

  return (

    <div className="children-page">

      {/* HEADER */}

      <div className="header-card glass">

        <h1>Children Overview</h1>

        <p>
          Monitor academic performance, attendance, and activity
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



      {/* TABLE */}

      <div className="table-card glass">

        <h2>Children Details</h2>

        <table className="table">

          <thead>

            <tr>
              <th>Name</th>
              <th>Program</th>
              <th>Attendance</th>
              <th>CGPA</th>
              <th>Status</th>
              <th>Last Activity</th>
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
                  <span className="badge attendance">
                    {child.attendance}
                  </span>
                </td>

                <td>
                  <span className="badge cgpa">
                    {child.cgpa}
                  </span>
                </td>

                <td>
                  <span className="badge status">
                    {child.status}
                  </span>
                </td>

                <td>
                  {child.lastActivity}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>



      {/* LOWER SECTION */}

      <div className="lower-grid">

        {/* PERFORMANCE */}

        <div className="panel glass">

          <h2>Performance Summary</h2>

          <div className="summary">

            <div className="summary-item">
              📈 Academic Performance: Excellent
            </div>

            <div className="summary-item">
              📊 Attendance: Above Average
            </div>

            <div className="summary-item">
              🎯 Assignment Completion: 96%
            </div>

            <div className="summary-item">
              🏆 Rank Improvement: +5 positions
            </div>

          </div>

        </div>



        {/* QUICK ACTIONS */}

        <div className="panel glass">

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
              Contact Teacher
            </button>

          </div>

        </div>

      </div>



      {/* CSS */}

      <style>{`

.children-page{
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
margin-bottom:5px;
color:#1e3a8a;
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
font-size:22px;
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
text-align:left;
padding:12px;
background:#2563eb;
color:white;
}

.table td{
padding:12px;
border-bottom:1px solid #eee;
}

.table tr:hover{
background:#f1f5f9;
}

.name{
font-weight:bold;
color:#1e3a8a;
}

/* BADGE */

.badge{
padding:4px 10px;
border-radius:10px;
font-size:12px;
}

.attendance{
background:#dbeafe;
color:#2563eb;
}

.cgpa{
background:#dcfce7;
color:#16a34a;
}

.status{
background:#ede9fe;
color:#7c3aed;
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

.summary-item{
padding:8px 0;
}

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

export default Children;