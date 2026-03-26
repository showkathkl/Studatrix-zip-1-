import { useState } from "react";

function TeacherReports() {

  const reports = [

    {
      id: "RPT-101",
      title: "Class Performance Report",
      description: "Overall performance analysis of Data Structures class.",
      date: "18 Feb 2026",
      status: "Approved"
    },

    {
      id: "RPT-102",
      title: "Attendance Report",
      description: "Monthly attendance summary for all students.",
      date: "15 Feb 2026",
      status: "Approved"
    },

    {
      id: "RPT-103",
      title: "Assignment Completion Report",
      description: "Report showing assignment submission statistics.",
      date: "12 Feb 2026",
      status: "Pending"
    },

    {
      id: "RPT-104",
      title: "Student Progress Report",
      description: "Individual student academic progress evaluation.",
      date: "10 Feb 2026",
      status: "Approved"
    },

    {
      id: "RPT-105",
      title: "Semester Summary Report",
      description: "Complete semester academic and attendance summary.",
      date: "05 Feb 2026",
      status: "Approved"
    },

    {
      id: "RPT-106",
      title: "Class Engagement Report",
      description: "Student participation and engagement analysis.",
      date: "01 Feb 2026",
      status: "Pending"
    }

  ];


  const stats = [

    { label: "Total Reports", value: "48" },
    { label: "Approved", value: "39" },
    { label: "Pending", value: "6" },
    { label: "Rejected", value: "3" }

  ];


  const activities = [

    "Generated attendance report",
    "Reviewed class performance",
    "Exported semester report",
    "Approved student progress report",
    "Updated assignment analytics"

  ];


  return (

    <div className="reports-page">


      {/* HEADER */}

      <div className="header">

        <h1>Reports & Analytics</h1>

        <p>
          Academic reports and performance monitoring
        </p>

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



      {/* REPORTS */}

      <div className="reports-grid">

        {reports.map((report) => (

          <div key={report.id} className="report-card">

            <div className="report-header">

              <span className="report-id">
                {report.id}
              </span>

              <span className={`status ${report.status.toLowerCase()}`}>
                {report.status}
              </span>

            </div>

            <h3>
              {report.title}
            </h3>

            <p>
              {report.description}
            </p>

            <div className="report-footer">

              <span className="date">
                {report.date}
              </span>

              <button className="view-btn">
                View
              </button>

            </div>

          </div>

        ))}

      </div>



      {/* LOWER */}

      <div className="lower-grid">


        {/* ACTIVITY */}

        <div className="panel">

          <h3>Recent Activity</h3>

          {activities.map((activity, index) => (

            <div key={index} className="activity-item">

              <span className="dot"></span>

              {activity}

            </div>

          ))}

        </div>



        {/* PERFORMANCE */}

        <div className="panel">

          <h3>Performance Overview</h3>

          <div className="performance">

            <div>
              Attendance
              <strong>94%</strong>
            </div>

            <div>
              Assignment Completion
              <strong>88%</strong>
            </div>

            <div>
              Student Performance
              <strong>91%</strong>
            </div>

            <div>
              Engagement
              <strong>90%</strong>
            </div>

          </div>

        </div>

      </div>



      {/* EXPORT */}

      <div className="panel export">

        <h3>Export Reports</h3>

        <div className="export-buttons">

          <button className="export-btn">
            Export PDF
          </button>

          <button className="export-btn">
            Export Excel
          </button>

          <button className="export-btn">
            Export CSV
          </button>

        </div>

      </div>



      {/* CSS */}

      <style>{`

.reports-page{
animation:fadeIn .4s ease;
}


/* HEADER */

.header h1{
font-size:26px;
margin-bottom:5px;
}

.header p{
color:#64748b;
margin-bottom:20px;
}


/* STATS */

.stats-grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
gap:16px;
margin-bottom:20px;
}

.stat-card{
background:white;
padding:18px;
border-radius:12px;
box-shadow:0 4px 14px rgba(0,0,0,.06);
}

.stat-label{
font-size:13px;
color:#64748b;
}

.stat-value{
font-size:26px;
font-weight:600;
color:#2563eb;
}


/* REPORTS */

.reports-grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
gap:18px;
margin-bottom:20px;
}

.report-card{
background:white;
padding:18px;
border-radius:12px;
box-shadow:0 4px 14px rgba(0,0,0,.06);
}

.report-header{
display:flex;
justify-content:space-between;
margin-bottom:6px;
}

.status.approved{
color:#22c55e;
}

.status.pending{
color:#f59e0b;
}

.report-footer{
display:flex;
justify-content:space-between;
margin-top:10px;
}

.date{
font-size:12px;
color:#64748b;
}

.view-btn{
padding:6px 12px;
border:none;
border-radius:6px;
background:#2563eb;
color:white;
}


/* LOWER */

.lower-grid{
display:grid;
grid-template-columns:1fr 1fr;
gap:18px;
margin-bottom:20px;
}

.panel{
background:white;
padding:18px;
border-radius:12px;
box-shadow:0 4px 14px rgba(0,0,0,.06);
}

.dot{
width:8px;
height:8px;
background:#2563eb;
border-radius:50%;
display:inline-block;
margin-right:8px;
}

.performance{
display:grid;
grid-template-columns:repeat(2,1fr);
gap:12px;
margin-top:10px;
}


/* EXPORT */

.export-buttons{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
gap:12px;
}

.export-btn{
padding:12px;
border:none;
border-radius:8px;
background:#2563eb;
color:white;
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

export default TeacherReports;